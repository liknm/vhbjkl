class Node {
    constructor(id, x, y, info) {
        this.id = id; // 节点的唯一标识符
        this.x = x; // 节点的横坐标
        this.y = y; // 节点的纵坐标
        this.info = info; // 节点的相关信息
    }
}


class Edge {
    constructor(id1, id2, weight) {
        this.id1 = id1;
        this.id2 = id2;
        this.weight = weight;
    }
}

class Point {
    constructor(id) {
        this.id = id;
    }
}

const edges = [
    new Edge(1, 2, 130),
    new Edge(1, 5, 142),
    new Edge(3, 4, 182),
    new Edge(2, 3, 140),
    new Edge(2, 7, 349),
    new Edge(2, 12, 143),
    new Edge(4, 14, 143),
    new Edge(11, 15, 142),
    new Edge(11, 12, 130),
    new Edge(12, 13, 140),
    new Edge(13, 14, 182),
    new Edge(6, 7, 130),
    new Edge(6, 10, 142),
    new Edge(7, 8, 140),
    new Edge(8, 9, 182),
    new Edge(5, 15, 143),
    new Edge(15, 18, 124),
    new Edge(16, 18, 272),
    new Edge(16, 17, 322),
    new Edge(18, 19, 64),
    new Edge(19, 23, 104),
    new Edge(22, 23, 114),
    new Edge(22, 27, 51),
    new Edge(24, 27, 107),
    new Edge(20, 24, 76),
    new Edge(16, 20, 92),
    new Edge(24, 26, 145),
    new Edge(25, 26, 177),
    new Edge(24, 28, 60),
    new Edge(14, 17, 124),
    new Edge(17, 21, 56),
    new Edge(21, 25, 112),
    new Edge(25, 35, 56),
    new Edge(28, 31, 73),
    new Edge(29, 31, 59),
    new Edge(29, 30, 177),
    new Edge(12, 16, 124),
    new Edge(29, 30, 177),
    new Edge(31, 32, 123),
    new Edge(32, 33, 322),
    new Edge(33, 34, 51),
    new Edge(33, 35, 200),
    new Edge(10, 37, 366),
    new Edge(37, 40, 205),
    new Edge(40, 41, 192),
    new Edge(40, 42, 156),
    new Edge(42, 47, 344),
    new Edge(42, 46, 289),
    new Edge(47, 49, 278),
    new Edge(43, 46, 305),
    new Edge(48, 49, 316),
    new Edge(9, 38, 366),
    new Edge(43, 48, 344),
    new Edge(48, 50, 129),
    new Edge(38, 39, 309),
    new Edge(39, 53, 288),
    new Edge(39, 45, 177),
    new Edge(44, 45, 184),
    new Edge(43, 44, 309),
    new Edge(44, 52, 288),
    new Edge(48, 51, 597),
    new Edge(48, 81, 80),
    new Edge(50, 81, 49),
    new Edge(51, 52, 344),
    new Edge(52, 53, 361),
    new Edge(54, 69, 181),
    new Edge(55, 69, 188),
    new Edge(55, 61, 112),
    new Edge(56, 57, 224),
    new Edge(17, 63, 206),
    new Edge(63, 64, 70),
    new Edge(64, 65, 90),
    new Edge(65, 66, 61),
    new Edge(66, 67, 45),
    new Edge(67, 68, 61),
    new Edge(56, 68, 64),
    new Edge(58, 94, 292),
    new Edge(59, 94, 80),
    new Edge(59, 60, 140),
    new Edge(55, 60, 85),
    new Edge(9, 70, 292),
    new Edge(57, 87, 12),
    new Edge(86, 87, 126),
    new Edge(55, 62, 99),
    new Edge(82, 83, 369),
    new Edge(54, 71, 269),
    new Edge(71, 83, 95),
    new Edge(83, 96, 104),
    new Edge(96, 97, 25),
    new Edge(84, 97, 97),
    new Edge(71, 72, 190),
    new Edge(72, 73, 176),
    new Edge(73, 74, 28),
    new Edge(53, 73, 269),
    new Edge(74, 75, 55),
    new Edge(75, 76, 70),
    new Edge(76, 77, 89),
    new Edge(75, 78, 306),
    new Edge(52, 78, 297),
    new Edge(51, 80, 156),
    new Edge(79, 80, 141),
    new Edge(78, 79, 344),
    new Edge(93, 94, 188),
    new Edge(70, 93, 181),
    new Edge(35, 88, 127),
    new Edge(88, 89, 190),
    new Edge(57, 89, 280),
    new Edge(87, 90, 102),
    new Edge(90, 91, 158),
    new Edge(82, 92, 181),
    new Edge(85, 95, 45),
    new Edge(4, 100, 107),
    new Edge(100, 103, 112),
    new Edge(9, 103, 130),
    new Edge(5, 98, 107),
    new Edge(98, 101, 112),
    new Edge(10, 101, 130),
    new Edge(98, 99, 272),
    new Edge(99, 100, 322),
    new Edge(101, 102, 272),
    new Edge(102, 103, 322),
    new Edge(2, 99, 107),
    new Edge(99, 102, 112),
    new Edge(7, 102, 130),
    new Edge(107, 128, 221),
    new Edge(110, 128, 222),
    new Edge(107, 108, 195),
    new Edge(108, 129, 221),
    new Edge(108, 109, 188),
    new Edge(109, 112, 433),
    new Edge(110, 111, 195),
    new Edge(111, 112, 188),
    new Edge(130, 113, 11),
    new Edge(104, 130, 123),
    new Edge(121, 130, 367),
    new Edge(121, 122, 307),
    new Edge(113, 114, 212),
    new Edge(114, 115, 55),
    new Edge(115, 116, 275),
    new Edge(116, 127, 142),
    new Edge(114, 123, 448),
    new Edge(123, 124, 226),
    new Edge(122, 124, 223),
    new Edge(50, 104, 22),
    new Edge(111, 129, 222),
    new Edge(110, 113, 134),
    new Edge(106, 107, 134),
    new Edge(105, 106, 267),
    new Edge(104, 105, 310),
    new Edge(104, 117, 367),
    new Edge(117, 118, 307),
    new Edge(118, 119, 135),
    new Edge(119, 120, 153),
    new Edge(120, 125, 261),
    new Edge(125, 131, 98),
    new Edge(126, 131, 92),
    new Edge(118, 122, 123),
    new Edge(89, 132, 186),
    new Edge(90, 133, 104),
    new Edge(134, 135, 52),
    new Edge(135, 136, 134),
    new Edge(136, 137, 147),
    new Edge(138, 139, 134),
    new Edge(135, 138, 119),
    new Edge(136, 139, 119),
    new Edge(139, 140, 147),
    new Edge(137, 140, 119),
    new Edge(138, 143, 61),
    new Edge(142, 143, 100),
    new Edge(141, 142, 181),
    new Edge(140, 141, 61),
    new Edge(142, 144, 38),
    new Edge(144, 145, 100),
    new Edge(143, 145, 38),
    new Edge(145, 146, 36),
    new Edge(146, 147, 228),
    new Edge(61, 147, 101),
    new Edge(56, 147, 34),
    new Edge(146, 148, 213),
    new Edge(86, 134, 138),
    new Edge(95, 134, 281),
    new Edge(62, 148, 129),
    new Edge(82, 148, 136),
    new Edge(82, 144, 213),
    new Edge(82, 92, 181),
    new Edge(92, 141, 251),
    new Edge(95, 137, 52),
    new Edge(37, 149, 289),
    new Edge(38, 149, 305),
    new Edge(149, 150, 196),
    new Edge(150, 151, 145),
    new Edge(151, 152, 160),
    new Edge(46, 150, 165),
    new Edge(43, 152, 165),
    new Edge(38, 152, 196),
    new Edge(40, 150, 289),
    new Edge(70, 155, 136),
    new Edge(54, 155, 169),
    new Edge(54, 153, 141),
    new Edge(154, 155, 141),
    new Edge(153, 154, 169),
    new Edge(54, 153, 141),
    new Edge(53, 153, 225),
]

class EdgeOut {
    constructor(id1, id2) {
        this.id1 = id1;
        this.id2 = id2;
        //this.weight = weight;
    }
}

const edgesout = []


const nodes = [
    //
    new Node(1, 614, 1155, "学三"),
    new Node(2, 744, 1155, "学三右侧路口"),
    new Node(3, 884, 1155, "学四"),
    new Node(4, 1066, 1155, "学四右侧路口"),
    new Node(5, 472, 1155, "学三左侧路口"),
    new Node(6, 614, 1504, "学一"),
    new Node(7, 744, 1504, "学一右侧路口"),
    new Node(8, 884, 1504, "学二"),
    new Node(9, 1066, 1504, "学二右侧路口"),
    new Node(10, 472, 1504, "鸿通楼"),
    new Node(11, 614, 1012, "学五"),
    new Node(12, 744, 1012, "中"),
    new Node(13, 884, 1012, "学八"),
    new Node(14, 1066, 1012, "右"),
    new Node(15, 472, 1012, "左"),
    new Node(16, 744, 888, "中"),
    new Node(17, 1066, 888, "右"),
    new Node(18, 472, 888, "左"),
    new Node(19, 472, 824, "青年公寓"),
    new Node(20, 744, 796, "综合食堂西门"),
    new Node(21, 1066, 832, "学生活动中心"),
    new Node(22, 586, 720, "留学生公寓"),
    new Node(23, 472, 720, "左"),
    new Node(24, 744, 720, "中"),
    new Node(25, 1066, 720, "右"),
    new Node(26, 889, 720, "学十"),
    new Node(27, 637, 720, "学九"),
    new Node(28, 744, 660, "教九"),
    new Node(29, 685, 587, "学十一"),
    new Node(30, 508, 587, "北邮锦江酒店"),
    new Node(31, 744, 587, "学十"),
    new Node(32, 744, 464, "中"),
    new Node(33, 1066, 464, "快递站"),
    new Node(34, 1066, 413, "北门"),
    new Node(35, 1066, 664, ""),
    new Node(36, 472, 1702, "教四、邮局"),
    new Node(37, 472, 1870, "左"),
    new Node(38, 1066, 1870, "中"),
    new Node(39, 1375, 1870, "教一"),
    new Node(40, 472, 2066, "左"),
    new Node(41, 280, 2066, "西门"),
    new Node(42, 472, 2231, "左"),
    new Node(43, 1066, 2231, "中"),
    new Node(44, 1375, 2231, "教二"),
    new Node(45, 1375, 2047, "主楼"),
    new Node(46, 761, 2231, "教三"),
    new Node(47, 472, 2575, "左"),
    new Node(48, 1066, 2575, "中"),
    new Node(49, 750, 2575, "校医院"),
    new Node(50, 1066, 2704, "中门"),
    new Node(51, 1663, 2575,),
    new Node(52, 1663, 2231,),
    new Node(53, 1663, 1870,),
    new Node(54, 1663, 1504,),
    new Node(55, 1663, 1135,),
    new Node(56, 1663, 888,),
    new Node(57, 1663, 664,),
    new Node(58, 1066, 1135,),
    new Node(59, 1438, 1135, "学生发展中心"),
    new Node(60, 1578, 1135, "综合服务大厅"),
    new Node(61, 1663, 1023, "学苑风味餐厅"),
    new Node(62, 1762, 1135, "学生食堂"),
    new Node(63, 1272, 888, "麦当劳"),
    new Node(64, 1342, 888, "移动营业厅"),
    new Node(65, 1432, 888, "物美超市、浴室"),
    new Node(66, 1493, 888, "联通营业厅"),
    new Node(67, 1538, 888, "水房、门店"),
    new Node(68, 1599, 888, "图片社打印店"),
    new Node(69, 1663, 1323, "篮球场"),
    new Node(70, 1358, 1504, "行政办公楼"),
    new Node(71, 1932, 1504, "网球场、排球场"),
    new Node(72, 1932, 1694, "体育馆"),
    new Node(73, 1932, 1870,),
    new Node(74, 1960, 1870,),
    new Node(75, 1960, 1925,),
    new Node(76, 2030, 1925, "全民健身"),
    new Node(77, 2119, 1925, "体育场"),
    new Node(78, 1960, 2231,),
    new Node(79, 1960, 2575,),
    new Node(80, 1819, 2575, "可信网络通信协同创新中心（创新楼）"),
    new Node(81, 1066, 2655, "中门邮局"),
    new Node(82, 2027, 1135,),
    new Node(83, 2027, 1504,),
    new Node(84, 2253, 1504, "东门"),
    new Node(85, 2253, 652, "东北门"),
    new Node(86, 1789, 652, "科研楼"),
    new Node(87, 1663, 652,),
    new Node(88, 1193, 664, "经管楼"),
    new Node(89, 1383, 664,),
    new Node(90, 1663, 550,),
    new Node(91, 1505, 550, "学六公寓"),
    new Node(92, 2208, 1135,),
    new Node(93, 1358, 1323, "图书馆"),
    new Node(94, 1358, 1135,),
    new Node(95, 2208, 652,),
    new Node(96, 2131, 1504, "学29"),
    new Node(97, 2156, 1504, "游泳馆"),
    new Node(98, 472, 1262,),
    new Node(99, 744, 1262,),
    new Node(100, 1066, 1262,),
    new Node(101, 472, 1374,),
    new Node(102, 744, 1374,),
    new Node(103, 1066, 1374,),
    new Node(104, 1066, 2726,),
    new Node(105, 756, 2726,),
    new Node(106, 489, 2726,),
    new Node(107, 489, 2860,),
    new Node(108, 489, 3055,),
    new Node(109, 489, 3243,),
    new Node(110, 932, 2860,),
    new Node(111, 932, 3055,),
    new Node(112, 932, 3243,),
    new Node(113, 1066, 2860,),
    new Node(114, 1066, 3072,),
    new Node(115, 1066, 3127,),
    new Node(116, 1341, 3127,),
    new Node(117, 1433, 2726,),
    new Node(118, 1740, 2726,),
    new Node(119, 1875, 2726,),
    new Node(120, 2028, 2726,),
    new Node(121, 1433, 2849,),
    new Node(122, 1740, 2849,),
    new Node(123, 1514, 3072,),
    new Node(124, 1740, 3072,),
    new Node(125, 2028, 2987,),
    new Node(126, 2218, 2987,),
    new Node(127, 1341, 3269,),
    new Node(128, 710, 2860,),
    new Node(129, 710, 3055,),
    new Node(130, 1066, 2849,),
    new Node(131, 2126, 2987,),
    new Node(132, 1383, 478,),
    new Node(133, 1663, 446,),
    new Node(134, 1927, 652,),
    new Node(135, 1927, 704,),
    new Node(136, 2061, 704,),
    new Node(137, 2208, 704,),
    new Node(138, 1927, 823,),
    new Node(139, 2061, 823,),
    new Node(140, 2208, 823,),
    new Node(141, 2208, 884,),
    new Node(142, 2027, 884,),
    new Node(143, 1927, 884,),
    new Node(144, 2027, 922,),
    new Node(145, 1927, 922,),
    new Node(146, 1891, 922,),
    new Node(147, 1663, 922,),
    new Node(148, 1891, 1135,),
    new Node(149, 761, 1870,),
    new Node(150, 761, 2066,),
    new Node(151, 906, 2066,),
    new Node(152, 1066, 2066,),
    new Node(153, 1663, 1645,),
    new Node(154, 1494, 1645),
    new Node(155, 1494, 1504),
];

function searchShortestPath(id) {

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
        if ((id1 == edges[i].id1 && id2 == edges[i].id2) || id2 == edges[i].id1 && id1 == edges[i].id2) {
            return edges[i].weight;
        }
    }
}


//检验边的权值与检验边的正确性
//let linksId=[] ;
//a=searchShortestRoad(1,linksId);
//console.log(a);
/*
function calculateWeight() {
    for (let i = 0; i < edges.length; i++) {
        let x1 = searchByIdToX(edges[i].id1);
        let y1 = searchByIdToY(edges[i].id1);
        let x2 = searchByIdToX(edges[i].id2);
        let y2 = searchByIdToY(edges[i].id2);
        if (x1 == x2) {
            if (y1 == y2) {
                console.log("发生错误");
            } else {
                console.log(edges[i].id1 + ":");
                console.log(Math.abs(y1 - y2));

                if (edges[i].weight == Math.abs(y1 - y2)) {
                    console.log("right");
                } else {
                    console.log("!!!")
                }

            }
        } else if (y1 == y2) {
            console.log(edges[i].id1 + ":");
            console.log(Math.abs(x1 - x2));

            if (edges[i].weight == Math.abs(x1 - x2)) {
                console.log("right");
            } else {
                console.log("！！！");
            }

        } else {
            console.log("发生错误");
        }
    }
}
*/


// 使用 Dijkstra 算法计算从起始节点到目标节点的最短路径
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
            if (visited.has(node.id) == false && distances[node.id] > 0 && distances[node.id] < minDistance) {
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

        //console.log(visited);
        //console.log(distances);
        //console.log(previous);
    }
    let temp = endNodeId;
    while (temp != startNodeId) {
        //edgesout.push(new EdgeOut(temp, previous[temp]));
        //console.log(temp,previous[temp]);
        temp = previous[temp];
    }
    // 返回从起始节点到目标节点的最短路径距离
    return distances[endNodeId];
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
            if (visited.has(node.id) == false && distances[node.id] > 0 && distances[node.id] < minDistance) {
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

        //console.log(visited);
        //console.log(distances);
        //console.log(previous);
    }
    let temp = endNodeId;

    while (temp != startNodeId) {
        edgesout.push(new EdgeOut(temp, previous[temp]));
        //console.log(temp,previous[temp]);
        temp = previous[temp];
    }
    // 返回从起始节点到目标节点的最短路径距离
    return distances[endNodeId];
}

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

const expoints = [
    89, 64
]
