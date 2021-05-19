module.exports = function (req, res, next) {
  if (req.method === "POST") {
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    req.method = "GET";
  }
  // Continue to JSON Server router
  next();
};

// module.exports = function (req, res, next) {
//   console.log("setp 0");
//   if (req.method === "POST" && req.originalUrl === "/annVerifyInfo") {
//     console.log("setp 1");
//     if (req.body.param.verifyType === "2") {
//       const data = {
//         msgCode: "0001",
//         msgContent: "Success",
//         result: {
//           annInfos: [
//             {
//               annSeqno: 0,
//               annName: "公告名稱",
//               annItem: {
//                 itemCode: "N",
//                 itemDesc: "公告描述",
//               },
//               annUnit: {
//                 unitId: "5",
//                 unitName: "智慧聯網應用發展處",
//               },
//               annViewType: "A",
//               annStatus: "已上架",
//               annRepeal: false,
//               releaseDate: "2021/03/01",
//               releaseUser: {
//                 empCode: "1",
//                 empName: "大朋友",
//                 empEnName: "big child",
//               },
//               releaseUnit: {
//                 unitId: "5",
//                 unitName: "智慧聯網應用發展處",
//               },
//               upUser: {
//                 empCode: "1",
//                 empName: "大朋友",
//                 empEnName: "big child",
//               },
//               startDate: "2021/03/01",
//               endDate: "2021/03/016",
//               annDLType: "0",
//               annWMKType: "1",
//               applyData: {
//                 dlSeqno: 1234,
//                 applyEmployee: {
//                   empCode: "2",
//                   empName: "小朋友",
//                   empEnName: "child",
//                 },
//                 applyReason: "需要使用",
//               },
//               annVERDL: {
//                 empCode: "1",
//                 empName: "大朋友",
//                 empEnName: "big child",
//               },
//               viewEmployees: [
//                 {
//                   empCode: "3",
//                   empName: "尤金",
//                   empEnName: "yugeen",
//                 },
//                 {
//                   empCode: "4",
//                   empName: "佛羅多",
//                   empEnName: "felodou",
//                 },
//               ],
//               viewUnits: [
//                 {
//                   unitId: "5",
//                   unitName: "智慧聯網應用發展處",
//                 },
//                 {
//                   unitId: "6",
//                   unitName: "企業數位創新應用處",
//                 },
//               ],
//               annexs: [
//                 {
//                   annexName: "LOGO",
//                   annexgroup: 1,
//                   uploadFiles: [
//                     {
//                       fileSeqno: 1,
//                       fileName: "LOGO.pdf",
//                       fileSize: "1",
//                     },
//                     {
//                       fileSeqno: 2,
//                       fileName: "LOGO.word",
//                       fileSize: "0.5",
//                     },
//                     {
//                       fileSeqno: 3,
//                       fileName: "LOGO.excel",
//                       fileSize: "0.2",
//                     },
//                   ],
//                 },
//                 {
//                   annexName: "使用說明",
//                   annexgroup: 2,
//                   uploadFiles: [
//                     {
//                       fileSeqno: 1,
//                       fileName: "使用說明.png",
//                       fileSize: "1",
//                     },
//                     {
//                       fileSeqno: 2,
//                       fileName: "使用說明.jpg",
//                       fileSize: "0.5",
//                     },
//                   ],
//                 },
//                 {
//                   annexName: "範例",
//                   annexgroup: 3,
//                   uploadFiles: [
//                     {
//                       fileSeqno: 0,
//                       fileName: "範例.ppt",
//                       fileSize: "1",
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       };
//       console.log("setp 2");
//       return res.jsonp(data);
//     }
//     console.log("next1");
//     next();
//   }
//   console.log("next2");
//   next();
// };
