//index.js
//获取应用实例
const app = getApp()
var map= [
  {
    "fId":"1",
    "name": "景点",
    "scale": 12,
    "latitude": "36.239898854",
    "longitude": "117.114859427",
    "iconPath":"/image/all.png",
    "data": [
      {
        "name": "岱庙",
        id:0,
        "latitude": "36.19407",
        "longitude": "117.1313",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"岱庙",
          bgColor:"#caf0f8",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
        "img": [
          ""
        ],
        "description": ""
      },
      {
        "name": "红门",
        id: 1,
        "longitude": "117.12789",
        "latitude": "36.21103",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"红门",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "岱宗坊",
        id: 2,
        "longitude": "117.13056945",
        "latitude": "36.200488899",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"岱宗坊",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "万仙楼",
        id: 3,
        "longitude": "117.126215124",
        "latitude": "36.214258248",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"万仙楼",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "斗母宫",
        id: 4,
        "longitude": "117.1226",
        "latitude": "36.22083",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"斗母宫",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
    
      {
        "name": "壶天阁",
        id: 5,
        "longitude": "117.115279",
        "latitude": "36.234451",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"壶天阁",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "中天门",
        id: 6,
        "longitude": "117.114859427",
        "latitude": "36.239898854",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"中天门",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "云步桥",
        id: 7,
        "longitude": "117.112882349",
        "latitude": "36.246015698",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"云步桥",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "五大夫松",
        id: 8,
        "longitude": "117.112700674",
        "latitude": "36.246531349",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"五大夫松",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "十八盘",
        id: 9,
        "longitude": "117.10798",
        "latitude": "36.25125",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"十八盘",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "南天门",
        id: 10,
        "longitude": "117.1044",
        "latitude": "36.25579",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"南天门",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "红雨川",
        id: 11,
        "longitude": "117.071533877",
        "latitude": "36.273183264",
        "showDialog": false,
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"红雨川",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": "红雨川内幽深静谧，别有洞天。玄门、牛角洞、阳元石、混沌石林立其间，彩带坪如同一幅飘落在青山绿水之中的锦绣绸缎。每逢孟春时节，此处漫山遍野的桃花次第开放，红成一片，落英缤纷，桃花满川，胜似唐诗“桃花乱落如红雨”的意境，故称 “红雨川”。"
        },
      {
        "name": "彩石溪",
        id: 12,
        "latitude": "36.27734",
        "longitude": "117.056756",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"彩石溪",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "碧峰寺",
        id: 13,
        "latitude": "36.274981349",
        "longitude": "117.056756",
        "iconPath": "/image/location.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"碧峰寺",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
        {
          "name": "桃花峪",
          id: 14,
          "latitude": "36.262203",
          "longitude": "117.028869",
          "iconPath": "/image/location.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"桃花峪",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"BYCLICK"},
            "img": [
              ""
            ],
            "description": ""
          },
          {
            "name": "天街",
            id: 15,
            "latitude": "36.255950899",
            "longitude": "117.10479045",
            "iconPath": "/image/location.png",
            "width": "30",
            "height": "30",
            callout: {padding:2,
              content:"天街",
              bgColor:"#FFFFFf",
              color:"#000000",
              fontSize: 12,
              borderRadius:30,
              display:"BYCLICK"},
              "img": [
                ""
              ],
              "description": ""
            },
            {
              "name": "唐摩崖",
              id: 16,
              "latitude": "36.256271799",
              "longitude": "117.109560899",
              "iconPath": "/image/location.png",
              "width": "30",
              "height": "30",
              callout: {padding:2,
                content:"唐摩崖",
                bgColor:"#FFFFFf",
                color:"#000000",
                fontSize: 12,
                borderRadius:30,
                display:"BYCLICK"},
                "img": [
                  ""
                ],
                "description": ""
              },
              {
                "name": "五岳独尊石",
                id: 17,
                "latitude": "36.257048698",
                "longitude": "117.109612349",
                "iconPath": "/image/location.png",
                "width": "30",
                "height": "30",
                callout: {padding:2,
                  content:"五岳独尊石",
                  bgColor:"#FFFFFf",
                  color:"#000000",
                  fontSize: 12,
                  borderRadius:30,
                  display:"BYCLICK"},
                  "img": [
                    ""
                  ],
                  "description": ""
                },
                {
                  "name": "碧霞祠",
                  id: 18,
                  "latitude": "36.255734799",
                  "longitude": "117.109345899",
                  "iconPath": "/image/location.png",
                  "width": "30",
                  "height": "30",
                  callout: {padding:2,
                    content:"碧霞祠",
                    bgColor:"#FFFFFf",
                    color:"#000000",
                    fontSize: 12,
                    borderRadius:30,
                    display:"BYCLICK"},
                    "img": [
                      ""
                    ],
                    "description": ""
                  },
                  {
                    "name": "玉皇顶",
                    id: 19,
                    "latitude": "36.257532799",
                    "longitude": "117.109192899",
                    "iconPath": "/image/location.png",
                    "width": "30",
                    "height": "30",
                    callout: {padding:2,
                      content:"玉皇顶",
                      bgColor:"#FFFFFf",
                      color:"#000000",
                      fontSize: 12,
                      borderRadius:30,
                      display:"BYCLICK"},
                      "img": [
                        ""
                      ],
                      "description": ""
                    },
                    {
                      "name": "天烛峰",
                      id: 19,
                      "latitude": "36.257055248",
                      "longitude": "117.105501124",
                      "iconPath": "/image/location.png",
                      "width": "30",
                      "height": "30",
                      callout: {padding:2,
                        content:"天烛峰",
                        bgColor:"#FFFFFf",
                        color:"#000000",
                        fontSize: 12,
                        borderRadius:30,
                        display:"BYCLICK"},
                        "img": [
                          ""
                        ],
                        "description": ""
                      }
    ]
  },
  {
    "fId":"2",
    "name": "停车场",
    "scale": 11.5,
    "latitude": 36.239898854,
    "longitude": 117.098320899,
    "iconPath":"/image/park.png",
    "data": [
      {
        "name": "天外村停车场",
        id: 0,
        "latitude": "36.205472",
        "longitude": "117.107683",
        "iconPath": "/image/park.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天外村停车场",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "东红门生态停车场门",
        id: 1,
        "latitude": "36.209642248",
        "longitude": "117.131081124",
        "iconPath": "/image/park.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"红门生态停车场",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "天烛峰停车场",
        id: 2,
        "latitude": "36.268027248",
        "longitude": "117.144569124",
        "iconPath": "/image/park.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天烛峰停车场",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "桃花峪停车场",
        "latitude": "36.261541",
        "longitude": "117.023184",
        "iconPath": "/image/park.png",
        "width": "30",
        "height": "30",
        "img": [
          ""
        ],
        "description": ""
      }
    ]
  },
  {
    "fId":"3",
    "scale": 12,
    "name": "售票处",
    "latitude": "36.266181799",
    "longitude": "117.098320899",
    "iconPath":"/image/all.png",
    "data": [
      {
        "name": "泰山风景区售票处",
        id: 0,
        "latitude": "36.21415",
        "longitude": "117.12646",
        "iconPath": "/image/ticket.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"泰山风景区售票处",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "中天门索道售票处",
        id: 1,
        "latitude": "36.239018",
        "longitude": "117.114062",
        "iconPath": "/image/ticket.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"中天门索道售票处",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "后石坞索道售票处",
        id: 2,
        "latitude": "36.25962798",
        "longitude": "117.106804",
        "iconPath": "/image/ticket.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"后石坞索道售票处",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
        {
          "name": "桃花源索道售票处",
          id: 3,
          "latitude": "36.257880899",
          "longitude": "117.10444045",
          "iconPath": "/image/ticket.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"桃花源索道售票处",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"BYCLICK"},
            "img": [
              ""
            ],
            "description": ""
          },
          {
            "name": "桃花源索道售票处",
            id: 4,
            "latitude": "36.254798982",
            "longitude": "117.080873472",
            "iconPath": "/image/ticket.png",
            "width": "30",
            "height": "30",
            callout: {padding:2,
              content:"桃花源索道售票处",
              bgColor:"#FFFFFf",
              color:"#000000",
              fontSize: 12,
              borderRadius:30,
              display:"BYCLICK"},
              "img": [
                ""
              ],
              "description": ""
            },
            {
              "name": "天烛峰售票处",
              id: 5,
              "latitude": "36.265436799",
              "longitude": "117.139983899",
              "iconPath": "/image/ticket.png",
              "width": "30",
              "height": "30",
              callout: {padding:2,
                content:"天烛峰售票处",
                bgColor:"#FFFFFf",
                color:"#000000",
                fontSize: 12,
                borderRadius:30,
                display:"BYCLICK"},
                "img": [
                  ""
                ],
                "description": ""
              },
              {
                "name": "售票处(罗汉崖)",
                id: 6,
                "latitude": "36.212930521",
                "longitude": "117.128366734",
                "iconPath": "/image/ticket.png",
                "width": "30",
                "height": "30",
                callout: {padding:2,
                  content:"售票处(罗汉崖)",
                  bgColor:"#FFFFFf",
                  color:"#000000",
                  fontSize: 12,
                  borderRadius:30,
                  display:"BYCLICK"},
                  "img": [
                    ""
                  ],
                  "description": ""
                }
    ]
  },
  {
    "fId":"4",
    "name": "酒店",
    "scale": 13,
    "latitude": "36.25125",
    "longitude": "117.10798",
    "iconPath":"/image/hotel.png",
    "data": [
      {
        "name": "玉液泉宾馆",
        id: 0,
        "latitude": "36.240620854",
        "longitude": "117.115830427",
        "iconPath": "/image/hotel.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"玉液泉宾馆",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "神憩宾馆",
        id: 1,
        "latitude": "36.256520899",
        "longitude": "117.10867345",
        "iconPath": "/image/hotel.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"神憩宾馆",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "云巢宾馆",
        id: 2,
        "latitude": "36.257254",
        "longitude": "117.104892",
        "iconPath": "/image/hotel.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"云巢宾馆",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "天街宾馆(顶天街店)",
        id: 3,
        "latitude": "36.25610496",
        "longitude": "117.104929377",
        "iconPath": "/image/hotel.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"天街宾馆(顶天街店)",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "桃源宾馆",
        id: 4,
        "latitude": "36.255650809",
        "longitude": "117.080670405",
        "iconPath": "/image/hotel.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"桃源宾馆",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
    ]
  },
  {
    "fId":"5",
    "scale": 13,
    "name": "购物点",
    "latitude": "36.210022854",
    "longitude": "117.128302427",
    "iconPath":"/image/all.png",
    "data": [
      {
        "name": "泰山-特产超市",
        id: 0,
        "latitude": "36.210022854",
        "longitude": "117.128302427",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"泰山-特产超市",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "中溪商亭",
        id: 1,
        "latitude": "36.238980854",
        "longitude": "117.114380427",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"中溪商亭",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "立春茶业",
        id: 2,
        "latitude": "36.248872",
        "longitude": "117.028889",
        "iconPath": "/img/ico/girl_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"立春茶业",
          bgColor:"#F19EC2",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        }
    ]
  },
  {
    "fId":"6",
    "scale": 15.2,
    "name": "卫生间",
    "latitude": "36.206679034",
    "longitude": "117.106396483",
    "iconPath":"/image/toilet.png",
    "data": [
      {
        "name": "公共厕所",
        "latitude": "36.206679034",
        "longitude": "117.106396483",
        "iconPath": "/image/toilet.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"公共厕所",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "公共厕所",
        "latitude": "36.257481349",
        "longitude": "117.10901067",
        "iconPath": "/image/toilet.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"公共厕所",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "后石坞索道售票处",
        id: 2,
        "latitude": "36.25962798",
        "longitude": "117.106804",
        "iconPath": "/image/ticket.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"后石坞索道售票处",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"BYCLICK"},
          "img": [
            ""
          ],
          "description": ""
        },
        {
          "name": "桃花源索道售票处",
          id: 3,
          "latitude": "36.257880899",
          "longitude": "117.10444045",
          "iconPath": "/image/ticket.png",
          "width": "30",
          "height": "30",
          callout: {padding:2,
            content:"桃花源索道售票处",
            bgColor:"#FFFFFf",
            color:"#000000",
            fontSize: 12,
            borderRadius:30,
            display:"BYCLICK"},
            "img": [
              ""
            ],
            "description": ""
          },
          {
            "name": "桃花源索道售票处",
            id: 4,
            "latitude": "36.254798982",
            "longitude": "117.080873472",
            "iconPath": "/image/ticket.png",
            "width": "30",
            "height": "30",
            callout: {padding:2,
              content:"桃花源索道售票处",
              bgColor:"#FFFFFf",
              color:"#000000",
              fontSize: 12,
              borderRadius:30,
              display:"BYCLICK"},
              "img": [
                ""
              ],
              "description": ""
            },
            {
              "name": "天烛峰售票处",
              id: 5,
              "latitude": "36.265436799",
              "longitude": "117.139983899",
              "iconPath": "/image/ticket.png",
              "width": "30",
              "height": "30",
              callout: {padding:2,
                content:"天烛峰售票处",
                bgColor:"#FFFFFf",
                color:"#000000",
                fontSize: 12,
                borderRadius:30,
                display:"BYCLICK"},
                "img": [
                  ""
                ],
                "description": ""
              },
              {
                "name": "售票处(罗汉崖)",
                id: 6,
                "latitude": "36.212930521",
                "longitude": "117.128366734",
                "iconPath": "/image/ticket.png",
                "width": "30",
                "height": "30",
                callout: {padding:2,
                  content:"售票处(罗汉崖)",
                  bgColor:"#FFFFFf",
                  color:"#000000",
                  fontSize: 12,
                  borderRadius:30,
                  display:"BYCLICK"},
                  "img": [
                    ""
                  ],
                  "description": ""
                }
    ]
  },
]





Page({
  data: {
    //云开发数据
      // avatarUrl: './user-unlogin.png',
      // userInfo: {},
      // logged: false,
      // takeSession: false,
      // requestResult: '',

    latitude: 36.266181799,
    longitude: 117.098320899,
    scale:13,
    buildlData: map,
    isSelectedBuild:0,
    isSelectedBuildType: 0,
    islocation: true,
    focusPointId:"",
    isChecked:true ,
    currentItemId:"1"
    
  },

//定位
// 距离 
onLoad: function() { 
  var that = this; 
  wx.getLocation({ 
      type: "gcj02", 
      altitude:true,
      success: (res)=>  { 
              const latitude = res.latitude; 
            const longitude = res.longitude; 
            const altitude=res.altitude;
              const resKm = that.getDistance(latitude,longitude,36.15,117.06); 
              that.setData({ 
                  // latitude: res.latitude, 
        // longitude: res.longitude, 
        // markers: this.getLingyuanMarkers(), 
        disKm:resKm ,
        alt:altitude
        
          }) 
      } 
  }) 
}, 
  dingwei:function(){
    var that=this;
  wx.getLocation({
   type: 'gcj02',
   success: function(res) {
    that.setData({
     latitude:res.latitude,
     scale:16.4,
     longitude:res.longitude
    })
   //console.log(res.latitude)
   // console.log(res.longitude)
   }

  })
},
//展示标志点
  changePage: function (event) {
    
    this.setData({
      currentItemId:event.currentTarget.dataset.num,
      isSelectedBuildType: event.currentTarget.dataset.num-1,
      longitude:map[event.currentTarget.dataset.num-1].longitude,
      latitude:map[event.currentTarget.dataset.num-1].latitude,
      scale: 16,
    });
    
  },
//标记跳转
  markertap(res) {
   
  
    var mark=res.currentTarget.dataset.num;
    var markerId=res.detail.markerId;
    
    let temp=JSON.stringify(mark[markerId])//作用是把数组转变成可以在网页传递中的参数进行传递

        wx.navigateTo({
          url: "/pages/info/info?mar="+temp,
        })
    },

	rad (d) {//弧度转化
    return d * Math.PI / 180.0;
	},
	//计算当前位置与山顶距离，其中山顶位置为玉皇极的位置.
  getDistance(lat1, lng1, lat2, lng2) {
    var radLat1 = this.rad(lat1);
    var radLat2 = this.rad(lat2);
    var a = radLat1 - radLat2;
    var b = this.rad(lng1) - this.rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000; //输出为公里

    var distance = s;
    var distance_str = "";

    if (parseInt(distance) >= 1) {
      distance_str = distance.toFixed(2) + "km";
    } else {
      distance_str = distance * 1000 + "m";
    }
    //s=s.toFixed(4);

    console.info('距离是', s);
    console.info('距离是', distance_str);
    return distance_str;
  },

//定位
  dingwei:function(){
    var that=this;
  wx.getLocation({
   type: 'wgs84',
   altitude: true,
   success: function(res) {
     console.log(res);
    that.setData({
     latitude:res.latitude,
     scale:16,
     longitude:res.longitude
    })
   //console.log(res.latitude)
   // console.log(res.longitude)
   }
  })
},
//展示标志点
  changePage: function (event) {
    
    this.setData({
      currentItemId:event.currentTarget.dataset.num,
      isSelectedBuildType: event.currentTarget.dataset.num-1,
      longitude:map[event.currentTarget.dataset.num-1].longitude,
      latitude:map[event.currentTarget.dataset.num-1].latitude,
      scale: 16,
    });
    
  },


// 点击标点获取数据 底部弹框
markertap: function(res) {
  var that = this;
  var mark=res.currentTarget.dataset.num;
  var markerId=res.detail.markerId;
  // let marknew=new(res);
  // const latitudenew;
  //    const longitudenew;
 
  let latitude;
  let longitude;
  let description;
  let name;
  for(let i=0; i<mark.length; i++){
    if(mark[i].id==markerId){
      name=mark[i].name;
      latitude=mark[i].latitude;
      longitude=mark[i].longitude;
      description=mark[i].description;
      break;
    }
  }
  wx.getLocation({
    type: 'gcj02',
    success: (res)=> {
      let latitudenew = res.latitude;
      let longitudenew = res.longitude;
      console.log(latitudenew)
      console.log(longitudenew)
      let resKm = that.getDistance(latitudenew,longitudenew,latitude,longitude);
     that.setData({
      markNew: resKm,
     })
    }
  })
  console.log(mark)
  console.log(latitude)
  console.log(longitude)
  
  console.log(description)
  console.log(name)
  let resKm = that.getDistance(latitude,longitude,36.257532799,117.109192899);

  this.setData({
    markerName: name,
    markTop:resKm,
    markerdescription: description,
    showDialog: true,
  })
},
  toggleDialog: function () {
    this.setData({
      showDialog: false,
    })
  },

})