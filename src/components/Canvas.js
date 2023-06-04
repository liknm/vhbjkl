import React, {useEffect, useRef} from 'react'
import nodes from '../html/locations.json'
import edges from '../html/edges.json'


class EdgeOut {
    constructor(id1, id2) {
        this.id1 = id1;
        this.id2 = id2;
        //this.weight = weight;
    }
}

const Canvas = ({expoints, scale = 0.7}) => {
    const canvasRef = useRef(null)
    const edgesout = []

    function tsp(points, distances, id) {
        const numPoints = points.length;
        const visited = Array(numPoints).fill(false); // 用于跟踪访问过的点
        visited[id] = true; // 根据传入的id，将起始点标记为已访问
        let currentPoint = id; // 当前所在的点
        let totalDistance = 0; // 总距离
        let path = [id]; // 记录路径，起点为id

        // 对于每个点，选择距离最近的未访问点，直到所有点都被访问
        for (let i = 0; i < numPoints - 1; i++) {
            let nextPoint;
            let shortestDistance = Infinity;

            // 在未访问的点中找到距离当前点最近的点
            for (let j = 0; j < numPoints; j++) {
                if (!visited[j] && distances[currentPoint][j] < shortestDistance) {
                    shortestDistance = distances[currentPoint][j];
                    nextPoint = j;
                }
            }

            visited[nextPoint] = true; // 标记下一个点为已访问
            path.push(nextPoint); // 将下一个点添加到路径中
            totalDistance += shortestDistance; // 累加最短距离
            currentPoint = nextPoint; // 更新当前点为下一个点
        }

        // 回到起点
        totalDistance += distances[currentPoint][id]; // 添加回到起点的距离
        path.push(id); // 将起点添加到路径中

        return {path, totalDistance}; // 返回最短路径和总距离
    }

    const drawRoute = (points) => {

        const array = [];
        for (let i = 0; i < points.length; i++) {
            array[i] = [];
            for (let j = 0; j < points.length; j++) {
                array[i][j] = dijkstra(points[i], points[j]);
            }
            array[i].join(',');
        }
        let id = 0;
        if (points.length > 2) {
            const result = tsp(points, array, id);
            //const result = dijkstraDraw(points[0],points[1]);
            //console.log("最短路径:", result.path.map(pointId => points[pointId]));
            //console.log("最短距离:", result.totalDistance);
            for (let i = 0; i < result.path.map(pointId => points[pointId]).length - 1; i++) {
                dijkstraDraw(result.path.map(pointId => points[pointId])[i], result.path.map(pointId => points[pointId])[i + 1]);
            }
        } else {
            dijkstraDraw(points[0], points[1])
        }
    }

    function searchByIdToX(id) {
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].id === id) {
                return nodes[i].x;
            }
        }
        return null;
    }

    function searchByIdToY(id) {
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].id === id) {
                return nodes[i].y;
            }
        }
        return null;
    }

    function searchByIdToEdge(id1, id2) {
        for (let i = 0; i < edges.length; i++) {
            if ((id1 === edges[i].id1 && id2 === edges[i].id2) || id2 === edges[i].id1 && id1 === edges[i].id2) {
                return edges[i].weight;
            }
        }
    }

    function dijkstraDraw(startNodeId, endNodeId) {
        // 初始化距离和已访问节点的集合
        const distances = {};
        const previous = {};
        const visited = new Set();
        for (const node of nodes) {
            if (searchByIdToEdge(startNodeId, node.id) > 0) {
                distances[node.id] = searchByIdToEdge(startNodeId, node.id);
                previous[node.id] = startNodeId;
            }
        }
        // 将起始节点距离设置为0，并添加到已访问节点集合中
        distances[startNodeId] = 0;
        previous[startNodeId] = null;
        visited.add(startNodeId);
        // 当未访问节点集合不为空时，继续循环
        while (visited.size < nodes.length && visited.has(endNodeId) === false) {
            // 在未访问节点中找到距离起始节点最短的节点

            let minDistance = Infinity;
            let minNodeId = null;
            for (const node of nodes) {
                if (visited.has(node.id) === false && distances[node.id] > 0 && distances[node.id] < minDistance) {
                    minDistance = distances[node.id];
                    minNodeId = node.id;
                }
            }

            // 如果没有找到可达的节点，则退出循环
            if (minNodeId === null) {
                break;
            }

            // 将找到的节点添加到已访问节点集合中
            visited.add(minNodeId);
            //console.log(visited);
            // 更新与该节点相邻节点的距离
            for (const edge of edges) {
                if ((edge.id1 === minNodeId && visited.has(edge.id2) === false)) {
                    const newDistance = distances[minNodeId] + edge.weight;
                    if (distances[edge.id2] === undefined || newDistance < distances[edge.id2]) {
                        distances[edge.id2] = newDistance;
                        previous[edge.id2] = edge.id1;
                    }
                } else if (edge.id2 === minNodeId && visited.has(edge.id1) === false) {
                    const newDistance = distances[minNodeId] + edge.weight;
                    if (distances[edge.id1] === undefined || newDistance < distances[edge.id1]) {
                        distances[edge.id1] = newDistance;
                        previous[edge.id1] = edge.id2;
                    }
                }
            }
        }
        let temp = endNodeId;

        while (temp !== startNodeId) {
            edgesout.push(new EdgeOut(temp, previous[temp]));
            //console.log(temp,previous[temp]);
            temp = previous[temp];
        }
        // 返回从起始节点到目标节点的最短路径距离
        return distances[endNodeId];
    }

    function dijkstra(startNodeId, endNodeId) {
        // 初始化距离和已访问节点的集合
        const distances = {};
        const previous = {};
        const visited = new Set();
        for (const node of nodes) {
            if (searchByIdToEdge(startNodeId, node.id) > 0) {
                distances[node.id] = searchByIdToEdge(startNodeId, node.id);
                previous[node.id] = startNodeId;
            }
        }
        //console.log(distances);
        // 将起始节点距离设置为0，并添加到已访问节点集合中
        distances[startNodeId] = 0;
        previous[startNodeId] = null;
        visited.add(startNodeId);
        //console.log(visited);
        //console.log(visited.has(startNodeId));
        // 当未访问节点集合不为空时，继续循环
        while (visited.size < nodes.length && visited.has(endNodeId) === false) {
            // 在未访问节点中找到距离起始节点最短的节点

            let minDistance = Infinity;
            let minNodeId = null;
            for (const node of nodes) {
                if (visited.has(node.id) === false && distances[node.id] > 0 && distances[node.id] < minDistance) {
                    minDistance = distances[node.id];
                    minNodeId = node.id;
                    //console.log(minDistance);
                    //console.log(minNodeId);
                }
            }

            // 如果没有找到可达的节点，则退出循环
            if (minNodeId === null) {
                break;
            }

            // 将找到的节点添加到已访问节点集合中
            visited.add(minNodeId);
            //console.log(visited);
            // 更新与该节点相邻节点的距离
            for (const edge of edges) {
                if ((edge.id1 === minNodeId && visited.has(edge.id2) === false)) {
                    const newDistance = distances[minNodeId] + edge.weight;
                    if (distances[edge.id2] === undefined || newDistance < distances[edge.id2]) {
                        distances[edge.id2] = newDistance;
                        previous[edge.id2] = edge.id1;
                    }
                } else if (edge.id2 === minNodeId && visited.has(edge.id1) === false) {
                    const newDistance = distances[minNodeId] + edge.weight;
                    if (distances[edge.id1] === undefined || newDistance < distances[edge.id1]) {
                        distances[edge.id1] = newDistance;
                        previous[edge.id1] = edge.id2;
                    }
                }
            }
        }
        let temp = endNodeId;
        while (temp !== startNodeId) {
            temp = previous[temp];
        }
        // 返回从起始节点到目标节点的最短路径距离
        return distances[endNodeId];
    }

    useEffect(() => {
        drawRoute(expoints)
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        //Our first draw
        const image = new Image()
        image.src = 'https://www.bupt.edu.cn/images/xtc.jpg'
        image.onload = () => {
            ctx.drawImage(image, 0, 0, 2491, 3509)
            for (let i = 0; i < edgesout.length; i++) {
                let x1 = searchByIdToX(edgesout[i].id1);
                let y1 = searchByIdToY(edgesout[i].id1);
                let x2 = searchByIdToX(edgesout[i].id2);
                let y2 = searchByIdToY(edgesout[i].id2);
                drawRedLine(x1, y1, x2, y2);
            }
        }

        function drawRedLine(x1, y1, x2, y2) {
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }

        ctx.scale(scale, scale)
    }, [expoints, scale])

    return (
        <div>
            <canvas ref={canvasRef} width={3491} height={3509}/>
        </div>
    )
}

export default Canvas
