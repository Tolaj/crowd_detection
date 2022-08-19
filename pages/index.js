import React from 'react';

const Home = (props) => {

    const [playControl, setPlayControl] = React.useState(0);
    const [charts, setCharts] = React.useState(0);
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
        setCounter((counter) => counter + 1);
        }, 2000);

        if(counter==10 || playControl == 0){
            setPlayControl(0)
            clearInterval(interval);
        }
        return () => {
            
        clearInterval(interval);
        
        };
    }, [counter == 10 || playControl == 0]);


    React.useEffect(() => {
        

        const Objects = [
            {
                "coordinatesArray": [
                    [
                        1230.0,
                        196.0
                    ],
                    [
                        952.5,
                        239.0
                    ],
                    [
                        1184.5,
                        214.5
                    ],
                    [
                        1471.5,
                        796.0
                    ],
                    [
                        1195.0,
                        1012.5
                    ],
                    [
                        710.0,
                        737.5
                    ],
                    [
                        1173.0,
                        576.0
                    ],
                    [
                        1820.0,
                        210.5
                    ],
                    [
                        742.0,
                        306.0
                    ],
                    [
                        119.0,
                        191.5
                    ],
                    [
                        601.5,
                        338.5
                    ],
                    [
                        788.0,
                        524.0
                    ],
                    [
                        1482.5,
                        393.0
                    ],
                    [
                        1112.0,
                        92.5
                    ],
                    [
                        1499.0,
                        553.5
                    ],
                    [
                        819.0,
                        137.0
                    ],
                    [
                        874.0,
                        131.5
                    ],
                    [
                        1715.5,
                        217.0
                    ],
                    [
                        228.5,
                        98.5
                    ],
                    [
                        291.0,
                        518.0
                    ],
                    [
                        1638.0,
                        67.5
                    ],
                    [
                        1599.0,
                        70.5
                    ],
                    [
                        382.0,
                        76.5
                    ],
                    [
                        1012.0,
                        160.5
                    ],
                    [
                        746.0,
                        56.5
                    ],
                    [
                        83.0,
                        892.0
                    ],
                    [
                        1700.0,
                        68.0
                    ],
                    [
                        916.5,
                        152.5
                    ],
                    [
                        409.0,
                        587.0
                    ],
                    [
                        463.0,
                        569.0
                    ],
                    [
                        1836.5,
                        26.5
                    ],
                    [
                        926.0,
                        39.5
                    ],
                    [
                        171.0,
                        24.0
                    ],
                    [
                        1320.0,
                        55.0
                    ],
                    [
                        1907.5,
                        138.0
                    ],
                    [
                        1750.5,
                        137.0
                    ],
                    [
                        595.0,
                        255.0
                    ],
                    [
                        486.0,
                        570.5
                    ]
                ],
                "detections": [
                    {
                        "className": "person",
                        "confidence": 99.33,
                        "coordinateX": "top-[1230.0px]",
                        "coordinateY": "top-[196.0px]",
                        "coordinates": [
                            1230.0,
                            196.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.23,
                        "coordinateX": "top-[952.5px]",
                        "coordinateY": "top-[239.0px]",
                        "coordinates": [
                            952.5,
                            239.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.14,
                        "coordinateX": "top-[1184.5px]",
                        "coordinateY": "top-[214.5px]",
                        "coordinates": [
                            1184.5,
                            214.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.71,
                        "coordinateX": "top-[1471.5px]",
                        "coordinateY": "top-[796.0px]",
                        "coordinates": [
                            1471.5,
                            796.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.61,
                        "coordinateX": "top-[1195.0px]",
                        "coordinateY": "top-[1012.5px]",
                        "coordinates": [
                            1195.0,
                            1012.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.32,
                        "coordinateX": "top-[710.0px]",
                        "coordinateY": "top-[737.5px]",
                        "coordinates": [
                            710.0,
                            737.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.91,
                        "coordinateX": "top-[1173.0px]",
                        "coordinateY": "top-[576.0px]",
                        "coordinates": [
                            1173.0,
                            576.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.69,
                        "coordinateX": "top-[1820.0px]",
                        "coordinateY": "top-[210.5px]",
                        "coordinates": [
                            1820.0,
                            210.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.56,
                        "coordinateX": "top-[742.0px]",
                        "coordinateY": "top-[306.0px]",
                        "coordinates": [
                            742.0,
                            306.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.48,
                        "coordinateX": "top-[119.0px]",
                        "coordinateY": "top-[191.5px]",
                        "coordinates": [
                            119.0,
                            191.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.41,
                        "coordinateX": "top-[601.5px]",
                        "coordinateY": "top-[338.5px]",
                        "coordinates": [
                            601.5,
                            338.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.36,
                        "coordinateX": "top-[788.0px]",
                        "coordinateY": "top-[524.0px]",
                        "coordinates": [
                            788.0,
                            524.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.23,
                        "coordinateX": "top-[1482.5px]",
                        "coordinateY": "top-[393.0px]",
                        "coordinates": [
                            1482.5,
                            393.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.02,
                        "coordinateX": "top-[1112.0px]",
                        "coordinateY": "top-[92.5px]",
                        "coordinates": [
                            1112.0,
                            92.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 96.83,
                        "coordinateX": "top-[1499.0px]",
                        "coordinateY": "top-[553.5px]",
                        "coordinates": [
                            1499.0,
                            553.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 96.61,
                        "coordinateX": "top-[819.0px]",
                        "coordinateY": "top-[137.0px]",
                        "coordinates": [
                            819.0,
                            137.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.28,
                        "coordinateX": "top-[874.0px]",
                        "coordinateY": "top-[131.5px]",
                        "coordinates": [
                            874.0,
                            131.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.2,
                        "coordinateX": "top-[1715.5px]",
                        "coordinateY": "top-[217.0px]",
                        "coordinates": [
                            1715.5,
                            217.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.28,
                        "coordinateX": "top-[228.5px]",
                        "coordinateY": "top-[98.5px]",
                        "coordinates": [
                            228.5,
                            98.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.51,
                        "coordinateX": "top-[291.0px]",
                        "coordinateY": "top-[518.0px]",
                        "coordinates": [
                            291.0,
                            518.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.14,
                        "coordinateX": "top-[1638.0px]",
                        "coordinateY": "top-[67.5px]",
                        "coordinates": [
                            1638.0,
                            67.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 92.19,
                        "coordinateX": "top-[1599.0px]",
                        "coordinateY": "top-[70.5px]",
                        "coordinates": [
                            1599.0,
                            70.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.44,
                        "coordinateX": "top-[382.0px]",
                        "coordinateY": "top-[76.5px]",
                        "coordinates": [
                            382.0,
                            76.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 90.46,
                        "coordinateX": "top-[1012.0px]",
                        "coordinateY": "top-[160.5px]",
                        "coordinates": [
                            1012.0,
                            160.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 89.06,
                        "coordinateX": "top-[746.0px]",
                        "coordinateY": "top-[56.5px]",
                        "coordinates": [
                            746.0,
                            56.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 88.77,
                        "coordinateX": "top-[83.0px]",
                        "coordinateY": "top-[892.0px]",
                        "coordinates": [
                            83.0,
                            892.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 88.46,
                        "coordinateX": "top-[1700.0px]",
                        "coordinateY": "top-[68.0px]",
                        "coordinates": [
                            1700.0,
                            68.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 85.47,
                        "coordinateX": "top-[916.5px]",
                        "coordinateY": "top-[152.5px]",
                        "coordinates": [
                            916.5,
                            152.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 83.75,
                        "coordinateX": "top-[409.0px]",
                        "coordinateY": "top-[587.0px]",
                        "coordinates": [
                            409.0,
                            587.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 82.38,
                        "coordinateX": "top-[463.0px]",
                        "coordinateY": "top-[569.0px]",
                        "coordinates": [
                            463.0,
                            569.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 77.9,
                        "coordinateX": "top-[1836.5px]",
                        "coordinateY": "top-[26.5px]",
                        "coordinates": [
                            1836.5,
                            26.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 68.69,
                        "coordinateX": "top-[926.0px]",
                        "coordinateY": "top-[39.5px]",
                        "coordinates": [
                            926.0,
                            39.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 67.36,
                        "coordinateX": "top-[171.0px]",
                        "coordinateY": "top-[24.0px]",
                        "coordinates": [
                            171.0,
                            24.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 65.22,
                        "coordinateX": "top-[1320.0px]",
                        "coordinateY": "top-[55.0px]",
                        "coordinates": [
                            1320.0,
                            55.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 58.76,
                        "coordinateX": "top-[1907.5px]",
                        "coordinateY": "top-[138.0px]",
                        "coordinates": [
                            1907.5,
                            138.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 58.52,
                        "coordinateX": "top-[1750.5px]",
                        "coordinateY": "top-[137.0px]",
                        "coordinates": [
                            1750.5,
                            137.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 58.18,
                        "coordinateX": "top-[595.0px]",
                        "coordinateY": "top-[255.0px]",
                        "coordinates": [
                            595.0,
                            255.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 56.04,
                        "coordinateX": "top-[486.0px]",
                        "coordinateY": "top-[570.5px]",
                        "coordinates": [
                            486.0,
                            570.5
                        ]
                    }
                ],
                "image": "Screenshot (306).png",
                "imageHight": 1080,
                "imageWidth": 1920
            },
            {
                "coordinatesArray": [
                    [
                        620.5,
                        450.0
                    ],
                    [
                        779.5,
                        347.5
                    ],
                    [
                        1613.0,
                        777.0
                    ],
                    [
                        1764.0,
                        561.0
                    ],
                    [
                        1586.5,
                        615.0
                    ],
                    [
                        1191.5,
                        410.5
                    ],
                    [
                        234.0,
                        727.5
                    ],
                    [
                        1216.5,
                        824.0
                    ],
                    [
                        1123.0,
                        178.0
                    ],
                    [
                        1876.0,
                        319.5
                    ],
                    [
                        950.0,
                        347.5
                    ],
                    [
                        715.5,
                        490.0
                    ],
                    [
                        731.5,
                        173.0
                    ],
                    [
                        604.0,
                        342.5
                    ],
                    [
                        1023.5,
                        260.5
                    ],
                    [
                        1116.0,
                        742.5
                    ],
                    [
                        1777.0,
                        233.0
                    ],
                    [
                        192.0,
                        972.5
                    ],
                    [
                        107.0,
                        174.0
                    ],
                    [
                        819.0,
                        112.5
                    ],
                    [
                        1727.0,
                        130.0
                    ],
                    [
                        1679.5,
                        93.5
                    ],
                    [
                        1645.0,
                        96.0
                    ],
                    [
                        1788.5,
                        337.0
                    ],
                    [
                        967.0,
                        72.0
                    ],
                    [
                        880.0,
                        117.0
                    ],
                    [
                        1201.5,
                        92.0
                    ],
                    [
                        1273.5,
                        73.5
                    ],
                    [
                        413.5,
                        567.0
                    ],
                    [
                        1396.5,
                        106.0
                    ],
                    [
                        455.5,
                        561.5
                    ],
                    [
                        1076.5,
                        999.5
                    ],
                    [
                        363.5,
                        552.5
                    ],
                    [
                        1830.0,
                        16.0
                    ],
                    [
                        64.0,
                        118.5
                    ],
                    [
                        1305.0,
                        46.5
                    ],
                    [
                        1359.5,
                        52.5
                    ],
                    [
                        929.5,
                        71.5
                    ]
                ],
                "detections": [
                    {
                        "className": "person",
                        "confidence": 99.81,
                        "coordinateX": "top-[620.5px]",
                        "coordinateY": "top-[450.0px]",
                        "coordinates": [
                            620.5,
                            450.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.76,
                        "coordinateX": "top-[779.5px]",
                        "coordinateY": "top-[347.5px]",
                        "coordinates": [
                            779.5,
                            347.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.45,
                        "coordinateX": "top-[1613.0px]",
                        "coordinateY": "top-[777.0px]",
                        "coordinates": [
                            1613.0,
                            777.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.3,
                        "coordinateX": "top-[1764.0px]",
                        "coordinateY": "top-[561.0px]",
                        "coordinates": [
                            1764.0,
                            561.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.3,
                        "coordinateX": "top-[1586.5px]",
                        "coordinateY": "top-[615.0px]",
                        "coordinates": [
                            1586.5,
                            615.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.24,
                        "coordinateX": "top-[1191.5px]",
                        "coordinateY": "top-[410.5px]",
                        "coordinates": [
                            1191.5,
                            410.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.1,
                        "coordinateX": "top-[234.0px]",
                        "coordinateY": "top-[727.5px]",
                        "coordinates": [
                            234.0,
                            727.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.06,
                        "coordinateX": "top-[1216.5px]",
                        "coordinateY": "top-[824.0px]",
                        "coordinates": [
                            1216.5,
                            824.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.95,
                        "coordinateX": "top-[1123.0px]",
                        "coordinateY": "top-[178.0px]",
                        "coordinates": [
                            1123.0,
                            178.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.63,
                        "coordinateX": "top-[1876.0px]",
                        "coordinateY": "top-[319.5px]",
                        "coordinates": [
                            1876.0,
                            319.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.44,
                        "coordinateX": "top-[950.0px]",
                        "coordinateY": "top-[347.5px]",
                        "coordinates": [
                            950.0,
                            347.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.4,
                        "coordinateX": "top-[715.5px]",
                        "coordinateY": "top-[490.0px]",
                        "coordinates": [
                            715.5,
                            490.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.34,
                        "coordinateX": "top-[731.5px]",
                        "coordinateY": "top-[173.0px]",
                        "coordinates": [
                            731.5,
                            173.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.71,
                        "coordinateX": "top-[604.0px]",
                        "coordinateY": "top-[342.5px]",
                        "coordinates": [
                            604.0,
                            342.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.52,
                        "coordinateX": "top-[1023.5px]",
                        "coordinateY": "top-[260.5px]",
                        "coordinates": [
                            1023.5,
                            260.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 96.82,
                        "coordinateX": "top-[1116.0px]",
                        "coordinateY": "top-[742.5px]",
                        "coordinates": [
                            1116.0,
                            742.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.82,
                        "coordinateX": "top-[1777.0px]",
                        "coordinateY": "top-[233.0px]",
                        "coordinates": [
                            1777.0,
                            233.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.28,
                        "coordinateX": "top-[192.0px]",
                        "coordinateY": "top-[972.5px]",
                        "coordinates": [
                            192.0,
                            972.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.27,
                        "coordinateX": "top-[107.0px]",
                        "coordinateY": "top-[174.0px]",
                        "coordinates": [
                            107.0,
                            174.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.85,
                        "coordinateX": "top-[819.0px]",
                        "coordinateY": "top-[112.5px]",
                        "coordinates": [
                            819.0,
                            112.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.63,
                        "coordinateX": "top-[1727.0px]",
                        "coordinateY": "top-[130.0px]",
                        "coordinates": [
                            1727.0,
                            130.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.01,
                        "coordinateX": "top-[1679.5px]",
                        "coordinateY": "top-[93.5px]",
                        "coordinates": [
                            1679.5,
                            93.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 92.6,
                        "coordinateX": "top-[1645.0px]",
                        "coordinateY": "top-[96.0px]",
                        "coordinates": [
                            1645.0,
                            96.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 92.57,
                        "coordinateX": "top-[1788.5px]",
                        "coordinateY": "top-[337.0px]",
                        "coordinates": [
                            1788.5,
                            337.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.11,
                        "coordinateX": "top-[967.0px]",
                        "coordinateY": "top-[72.0px]",
                        "coordinates": [
                            967.0,
                            72.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 90.53,
                        "coordinateX": "top-[880.0px]",
                        "coordinateY": "top-[117.0px]",
                        "coordinates": [
                            880.0,
                            117.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 89.34,
                        "coordinateX": "top-[1201.5px]",
                        "coordinateY": "top-[92.0px]",
                        "coordinates": [
                            1201.5,
                            92.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 88.62,
                        "coordinateX": "top-[1273.5px]",
                        "coordinateY": "top-[73.5px]",
                        "coordinates": [
                            1273.5,
                            73.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 87.74,
                        "coordinateX": "top-[413.5px]",
                        "coordinateY": "top-[567.0px]",
                        "coordinates": [
                            413.5,
                            567.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 86.73,
                        "coordinateX": "top-[1396.5px]",
                        "coordinateY": "top-[106.0px]",
                        "coordinates": [
                            1396.5,
                            106.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 86.07,
                        "coordinateX": "top-[455.5px]",
                        "coordinateY": "top-[561.5px]",
                        "coordinates": [
                            455.5,
                            561.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 82.73,
                        "coordinateX": "top-[1076.5px]",
                        "coordinateY": "top-[999.5px]",
                        "coordinates": [
                            1076.5,
                            999.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 78.02,
                        "coordinateX": "top-[363.5px]",
                        "coordinateY": "top-[552.5px]",
                        "coordinates": [
                            363.5,
                            552.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 75.87,
                        "coordinateX": "top-[1830.0px]",
                        "coordinateY": "top-[16.0px]",
                        "coordinates": [
                            1830.0,
                            16.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 69.05,
                        "coordinateX": "top-[64.0px]",
                        "coordinateY": "top-[118.5px]",
                        "coordinates": [
                            64.0,
                            118.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 61.48,
                        "coordinateX": "top-[1305.0px]",
                        "coordinateY": "top-[46.5px]",
                        "coordinates": [
                            1305.0,
                            46.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 57.2,
                        "coordinateX": "top-[1359.5px]",
                        "coordinateY": "top-[52.5px]",
                        "coordinates": [
                            1359.5,
                            52.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 50.33,
                        "coordinateX": "top-[929.5px]",
                        "coordinateY": "top-[71.5px]",
                        "coordinates": [
                            929.5,
                            71.5
                        ]
                    }
                ],
                "image": "Screenshot (307).png",
                "imageHight": 1080,
                "imageWidth": 1920
            },
            {
                "coordinatesArray": [
                    [
                        1133.0,
                        213.5
                    ],
                    [
                        1707.0,
                        493.5
                    ],
                    [
                        723.5,
                        402.0
                    ],
                    [
                        768.0,
                        293.5
                    ],
                    [
                        604.0,
                        385.5
                    ],
                    [
                        1096.5,
                        649.0
                    ],
                    [
                        1199.0,
                        359.0
                    ],
                    [
                        1132.5,
                        896.0
                    ],
                    [
                        1649.5,
                        717.0
                    ],
                    [
                        947.5,
                        397.0
                    ],
                    [
                        1219.0,
                        1008.0
                    ],
                    [
                        819.5,
                        108.5
                    ],
                    [
                        1047.0,
                        887.0
                    ],
                    [
                        616.0,
                        509.0
                    ],
                    [
                        881.5,
                        110.5
                    ],
                    [
                        1790.5,
                        280.5
                    ],
                    [
                        732.5,
                        128.5
                    ],
                    [
                        1668.0,
                        883.5
                    ],
                    [
                        190.5,
                        845.0
                    ],
                    [
                        1741.5,
                        155.5
                    ],
                    [
                        1025.0,
                        298.0
                    ],
                    [
                        932.0,
                        100.0
                    ],
                    [
                        1674.0,
                        109.5
                    ],
                    [
                        1825.5,
                        386.5
                    ],
                    [
                        714.5,
                        1036.5
                    ],
                    [
                        413.5,
                        565.5
                    ],
                    [
                        114.0,
                        174.5
                    ],
                    [
                        1406.0,
                        98.0
                    ],
                    [
                        987.5,
                        46.5
                    ],
                    [
                        261.0,
                        32.5
                    ],
                    [
                        1164.0,
                        71.5
                    ],
                    [
                        1898.5,
                        379.0
                    ],
                    [
                        24.0,
                        592.0
                    ],
                    [
                        1201.0,
                        57.0
                    ],
                    [
                        467.0,
                        550.5
                    ],
                    [
                        1345.0,
                        51.5
                    ],
                    [
                        1897.5,
                        234.5
                    ],
                    [
                        216.0,
                        1004.5
                    ],
                    [
                        1268.5,
                        67.0
                    ],
                    [
                        466.0,
                        16.5
                    ],
                    [
                        365.0,
                        547.0
                    ],
                    [
                        1711.5,
                        93.5
                    ],
                    [
                        1825.0,
                        14.0
                    ],
                    [
                        1102.5,
                        16.5
                    ]
                ],
                "detections": [
                    {
                        "className": "person",
                        "confidence": 99.68,
                        "coordinateX": "top-[1133.0px]",
                        "coordinateY": "top-[213.5px]",
                        "coordinates": [
                            1133.0,
                            213.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.67,
                        "coordinateX": "top-[1707.0px]",
                        "coordinateY": "top-[493.5px]",
                        "coordinates": [
                            1707.0,
                            493.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.64,
                        "coordinateX": "top-[723.5px]",
                        "coordinateY": "top-[402.0px]",
                        "coordinates": [
                            723.5,
                            402.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.44,
                        "coordinateX": "top-[768.0px]",
                        "coordinateY": "top-[293.5px]",
                        "coordinates": [
                            768.0,
                            293.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.41,
                        "coordinateX": "top-[604.0px]",
                        "coordinateY": "top-[385.5px]",
                        "coordinates": [
                            604.0,
                            385.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.3,
                        "coordinateX": "top-[1096.5px]",
                        "coordinateY": "top-[649.0px]",
                        "coordinates": [
                            1096.5,
                            649.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.27,
                        "coordinateX": "top-[1199.0px]",
                        "coordinateY": "top-[359.0px]",
                        "coordinates": [
                            1199.0,
                            359.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.11,
                        "coordinateX": "top-[1132.5px]",
                        "coordinateY": "top-[896.0px]",
                        "coordinates": [
                            1132.5,
                            896.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.93,
                        "coordinateX": "top-[1649.5px]",
                        "coordinateY": "top-[717.0px]",
                        "coordinates": [
                            1649.5,
                            717.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.36,
                        "coordinateX": "top-[947.5px]",
                        "coordinateY": "top-[397.0px]",
                        "coordinates": [
                            947.5,
                            397.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.14,
                        "coordinateX": "top-[1219.0px]",
                        "coordinateY": "top-[1008.0px]",
                        "coordinates": [
                            1219.0,
                            1008.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.88,
                        "coordinateX": "top-[819.5px]",
                        "coordinateY": "top-[108.5px]",
                        "coordinates": [
                            819.5,
                            108.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.67,
                        "coordinateX": "top-[1047.0px]",
                        "coordinateY": "top-[887.0px]",
                        "coordinates": [
                            1047.0,
                            887.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.64,
                        "coordinateX": "top-[616.0px]",
                        "coordinateY": "top-[509.0px]",
                        "coordinates": [
                            616.0,
                            509.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.43,
                        "coordinateX": "top-[881.5px]",
                        "coordinateY": "top-[110.5px]",
                        "coordinates": [
                            881.5,
                            110.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.32,
                        "coordinateX": "top-[1790.5px]",
                        "coordinateY": "top-[280.5px]",
                        "coordinates": [
                            1790.5,
                            280.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.28,
                        "coordinateX": "top-[732.5px]",
                        "coordinateY": "top-[128.5px]",
                        "coordinates": [
                            732.5,
                            128.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.25,
                        "coordinateX": "top-[1668.0px]",
                        "coordinateY": "top-[883.5px]",
                        "coordinates": [
                            1668.0,
                            883.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.78,
                        "coordinateX": "top-[190.5px]",
                        "coordinateY": "top-[845.0px]",
                        "coordinates": [
                            190.5,
                            845.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.25,
                        "coordinateX": "top-[1741.5px]",
                        "coordinateY": "top-[155.5px]",
                        "coordinates": [
                            1741.5,
                            155.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.12,
                        "coordinateX": "top-[1025.0px]",
                        "coordinateY": "top-[298.0px]",
                        "coordinates": [
                            1025.0,
                            298.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.88,
                        "coordinateX": "top-[932.0px]",
                        "coordinateY": "top-[100.0px]",
                        "coordinates": [
                            932.0,
                            100.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.64,
                        "coordinateX": "top-[1674.0px]",
                        "coordinateY": "top-[109.5px]",
                        "coordinates": [
                            1674.0,
                            109.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.06,
                        "coordinateX": "top-[1825.5px]",
                        "coordinateY": "top-[386.5px]",
                        "coordinates": [
                            1825.5,
                            386.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.64,
                        "coordinateX": "top-[714.5px]",
                        "coordinateY": "top-[1036.5px]",
                        "coordinates": [
                            714.5,
                            1036.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 92.8,
                        "coordinateX": "top-[413.5px]",
                        "coordinateY": "top-[565.5px]",
                        "coordinates": [
                            413.5,
                            565.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.69,
                        "coordinateX": "top-[114.0px]",
                        "coordinateY": "top-[174.5px]",
                        "coordinates": [
                            114.0,
                            174.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.36,
                        "coordinateX": "top-[1406.0px]",
                        "coordinateY": "top-[98.0px]",
                        "coordinates": [
                            1406.0,
                            98.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 90.68,
                        "coordinateX": "top-[987.5px]",
                        "coordinateY": "top-[46.5px]",
                        "coordinates": [
                            987.5,
                            46.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 85.8,
                        "coordinateX": "top-[261.0px]",
                        "coordinateY": "top-[32.5px]",
                        "coordinates": [
                            261.0,
                            32.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 85.59,
                        "coordinateX": "top-[1164.0px]",
                        "coordinateY": "top-[71.5px]",
                        "coordinates": [
                            1164.0,
                            71.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 84.19,
                        "coordinateX": "top-[1898.5px]",
                        "coordinateY": "top-[379.0px]",
                        "coordinates": [
                            1898.5,
                            379.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 83.28,
                        "coordinateX": "top-[24.0px]",
                        "coordinateY": "top-[592.0px]",
                        "coordinates": [
                            24.0,
                            592.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 78.67,
                        "coordinateX": "top-[1201.0px]",
                        "coordinateY": "top-[57.0px]",
                        "coordinates": [
                            1201.0,
                            57.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 77.51,
                        "coordinateX": "top-[467.0px]",
                        "coordinateY": "top-[550.5px]",
                        "coordinates": [
                            467.0,
                            550.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 69.81,
                        "coordinateX": "top-[1345.0px]",
                        "coordinateY": "top-[51.5px]",
                        "coordinates": [
                            1345.0,
                            51.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 68.3,
                        "coordinateX": "top-[1897.5px]",
                        "coordinateY": "top-[234.5px]",
                        "coordinates": [
                            1897.5,
                            234.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 67.34,
                        "coordinateX": "top-[216.0px]",
                        "coordinateY": "top-[1004.5px]",
                        "coordinates": [
                            216.0,
                            1004.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 64.37,
                        "coordinateX": "top-[1268.5px]",
                        "coordinateY": "top-[67.0px]",
                        "coordinates": [
                            1268.5,
                            67.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 62.81,
                        "coordinateX": "top-[466.0px]",
                        "coordinateY": "top-[16.5px]",
                        "coordinates": [
                            466.0,
                            16.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 56.82,
                        "coordinateX": "top-[365.0px]",
                        "coordinateY": "top-[547.0px]",
                        "coordinates": [
                            365.0,
                            547.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 56.39,
                        "coordinateX": "top-[1711.5px]",
                        "coordinateY": "top-[93.5px]",
                        "coordinates": [
                            1711.5,
                            93.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 53.72,
                        "coordinateX": "top-[1825.0px]",
                        "coordinateY": "top-[14.0px]",
                        "coordinates": [
                            1825.0,
                            14.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 52.03,
                        "coordinateX": "top-[1102.5px]",
                        "coordinateY": "top-[16.5px]",
                        "coordinates": [
                            1102.5,
                            16.5
                        ]
                    }
                ],
                "image": "Screenshot (308).png",
                "imageHight": 1080,
                "imageWidth": 1920
            },
            {
                "coordinatesArray": [
                    [
                        1244.5,
                        797.0
                    ],
                    [
                        715.0,
                        304.0
                    ],
                    [
                        1640.0,
                        387.0
                    ],
                    [
                        1026.5,
                        1017.0
                    ],
                    [
                        940.0,
                        485.5
                    ],
                    [
                        1141.0,
                        282.5
                    ],
                    [
                        938.5,
                        153.0
                    ],
                    [
                        1095.0,
                        517.5
                    ],
                    [
                        1398.0,
                        96.5
                    ],
                    [
                        103.0,
                        711.5
                    ],
                    [
                        1767.5,
                        941.5
                    ],
                    [
                        581.5,
                        605.5
                    ],
                    [
                        731.0,
                        884.0
                    ],
                    [
                        121.0,
                        1013.0
                    ],
                    [
                        1195.0,
                        285.0
                    ],
                    [
                        744.5,
                        219.5
                    ],
                    [
                        727.5,
                        67.0
                    ],
                    [
                        587.5,
                        467.5
                    ],
                    [
                        1005.5,
                        377.5
                    ],
                    [
                        1814.0,
                        367.0
                    ],
                    [
                        879.0,
                        108.0
                    ],
                    [
                        1028.5,
                        714.5
                    ],
                    [
                        817.0,
                        98.5
                    ],
                    [
                        361.5,
                        545.0
                    ],
                    [
                        1899.0,
                        281.0
                    ],
                    [
                        424.0,
                        563.5
                    ],
                    [
                        1305.5,
                        50.0
                    ],
                    [
                        451.0,
                        553.0
                    ],
                    [
                        104.0,
                        170.5
                    ],
                    [
                        1020.5,
                        28.0
                    ],
                    [
                        469.0,
                        550.0
                    ],
                    [
                        1150.0,
                        37.0
                    ],
                    [
                        268.0,
                        90.5
                    ],
                    [
                        1894.0,
                        505.5
                    ]
                ],
                "detections": [
                    {
                        "className": "person",
                        "confidence": 99.48,
                        "coordinateX": "top-[1244.5px]",
                        "coordinateY": "top-[797.0px]",
                        "coordinates": [
                            1244.5,
                            797.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.44,
                        "coordinateX": "top-[715.0px]",
                        "coordinateY": "top-[304.0px]",
                        "coordinates": [
                            715.0,
                            304.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.43,
                        "coordinateX": "top-[1640.0px]",
                        "coordinateY": "top-[387.0px]",
                        "coordinates": [
                            1640.0,
                            387.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.86,
                        "coordinateX": "top-[1026.5px]",
                        "coordinateY": "top-[1017.0px]",
                        "coordinates": [
                            1026.5,
                            1017.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.77,
                        "coordinateX": "top-[940.0px]",
                        "coordinateY": "top-[485.5px]",
                        "coordinates": [
                            940.0,
                            485.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.31,
                        "coordinateX": "top-[1141.0px]",
                        "coordinateY": "top-[282.5px]",
                        "coordinates": [
                            1141.0,
                            282.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.09,
                        "coordinateX": "top-[938.5px]",
                        "coordinateY": "top-[153.0px]",
                        "coordinates": [
                            938.5,
                            153.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.06,
                        "coordinateX": "top-[1095.0px]",
                        "coordinateY": "top-[517.5px]",
                        "coordinates": [
                            1095.0,
                            517.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.04,
                        "coordinateX": "top-[1398.0px]",
                        "coordinateY": "top-[96.5px]",
                        "coordinates": [
                            1398.0,
                            96.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.03,
                        "coordinateX": "top-[103.0px]",
                        "coordinateY": "top-[711.5px]",
                        "coordinates": [
                            103.0,
                            711.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.95,
                        "coordinateX": "top-[1767.5px]",
                        "coordinateY": "top-[941.5px]",
                        "coordinates": [
                            1767.5,
                            941.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.51,
                        "coordinateX": "top-[581.5px]",
                        "coordinateY": "top-[605.5px]",
                        "coordinates": [
                            581.5,
                            605.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.33,
                        "coordinateX": "top-[731.0px]",
                        "coordinateY": "top-[884.0px]",
                        "coordinates": [
                            731.0,
                            884.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.03,
                        "coordinateX": "top-[121.0px]",
                        "coordinateY": "top-[1013.0px]",
                        "coordinates": [
                            121.0,
                            1013.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 96.81,
                        "coordinateX": "top-[1195.0px]",
                        "coordinateY": "top-[285.0px]",
                        "coordinates": [
                            1195.0,
                            285.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.99,
                        "coordinateX": "top-[744.5px]",
                        "coordinateY": "top-[219.5px]",
                        "coordinates": [
                            744.5,
                            219.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.87,
                        "coordinateX": "top-[727.5px]",
                        "coordinateY": "top-[67.0px]",
                        "coordinates": [
                            727.5,
                            67.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.75,
                        "coordinateX": "top-[587.5px]",
                        "coordinateY": "top-[467.5px]",
                        "coordinates": [
                            587.5,
                            467.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.72,
                        "coordinateX": "top-[1005.5px]",
                        "coordinateY": "top-[377.5px]",
                        "coordinates": [
                            1005.5,
                            377.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.08,
                        "coordinateX": "top-[1814.0px]",
                        "coordinateY": "top-[367.0px]",
                        "coordinates": [
                            1814.0,
                            367.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.08,
                        "coordinateX": "top-[879.0px]",
                        "coordinateY": "top-[108.0px]",
                        "coordinates": [
                            879.0,
                            108.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.02,
                        "coordinateX": "top-[1028.5px]",
                        "coordinateY": "top-[714.5px]",
                        "coordinates": [
                            1028.5,
                            714.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.2,
                        "coordinateX": "top-[817.0px]",
                        "coordinateY": "top-[98.5px]",
                        "coordinates": [
                            817.0,
                            98.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 92.13,
                        "coordinateX": "top-[361.5px]",
                        "coordinateY": "top-[545.0px]",
                        "coordinates": [
                            361.5,
                            545.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 88.04,
                        "coordinateX": "top-[1899.0px]",
                        "coordinateY": "top-[281.0px]",
                        "coordinates": [
                            1899.0,
                            281.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 87.39,
                        "coordinateX": "top-[424.0px]",
                        "coordinateY": "top-[563.5px]",
                        "coordinates": [
                            424.0,
                            563.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 82.02,
                        "coordinateX": "top-[1305.5px]",
                        "coordinateY": "top-[50.0px]",
                        "coordinates": [
                            1305.5,
                            50.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 81.82,
                        "coordinateX": "top-[451.0px]",
                        "coordinateY": "top-[553.0px]",
                        "coordinates": [
                            451.0,
                            553.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 81.56,
                        "coordinateX": "top-[104.0px]",
                        "coordinateY": "top-[170.5px]",
                        "coordinates": [
                            104.0,
                            170.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 81.04,
                        "coordinateX": "top-[1020.5px]",
                        "coordinateY": "top-[28.0px]",
                        "coordinates": [
                            1020.5,
                            28.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 80.81,
                        "coordinateX": "top-[469.0px]",
                        "coordinateY": "top-[550.0px]",
                        "coordinates": [
                            469.0,
                            550.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 77.18,
                        "coordinateX": "top-[1150.0px]",
                        "coordinateY": "top-[37.0px]",
                        "coordinates": [
                            1150.0,
                            37.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 71.93,
                        "coordinateX": "top-[268.0px]",
                        "coordinateY": "top-[90.5px]",
                        "coordinates": [
                            268.0,
                            90.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 67.72,
                        "coordinateX": "top-[1894.0px]",
                        "coordinateY": "top-[505.5px]",
                        "coordinates": [
                            1894.0,
                            505.5
                        ]
                    }
                ],
                "image": "Screenshot (309).png",
                "imageHight": 1080,
                "imageWidth": 1920
            },
            {
                "coordinatesArray": [
                    [
                        1191.5,
                        423.5
                    ],
                    [
                        572.0,
                        809.0
                    ],
                    [
                        1057.5,
                        488.0
                    ],
                    [
                        1579.0,
                        245.5
                    ],
                    [
                        933.5,
                        246.0
                    ],
                    [
                        1281.0,
                        513.0
                    ],
                    [
                        1405.0,
                        87.5
                    ],
                    [
                        968.0,
                        526.0
                    ],
                    [
                        964.0,
                        679.0
                    ],
                    [
                        744.5,
                        609.5
                    ],
                    [
                        236.0,
                        948.0
                    ],
                    [
                        238.5,
                        91.5
                    ],
                    [
                        704.5,
                        170.0
                    ],
                    [
                        1192.5,
                        171.0
                    ],
                    [
                        1854.5,
                        563.0
                    ],
                    [
                        1089.0,
                        347.5
                    ],
                    [
                        549.0,
                        631.5
                    ],
                    [
                        32.0,
                        671.0
                    ],
                    [
                        839.0,
                        66.0
                    ],
                    [
                        1795.0,
                        191.0
                    ],
                    [
                        741.5,
                        96.5
                    ],
                    [
                        424.5,
                        554.5
                    ],
                    [
                        1777.5,
                        303.0
                    ],
                    [
                        359.0,
                        532.5
                    ],
                    [
                        469.0,
                        70.5
                    ],
                    [
                        1851.0,
                        179.5
                    ],
                    [
                        94.0,
                        171.5
                    ],
                    [
                        1017.5,
                        35.0
                    ],
                    [
                        880.5,
                        65.5
                    ],
                    [
                        1531.0,
                        17.5
                    ],
                    [
                        1240.0,
                        37.0
                    ],
                    [
                        456.0,
                        534.0
                    ],
                    [
                        954.5,
                        34.5
                    ],
                    [
                        698.0,
                        640.5
                    ]
                ],
                "detections": [
                    {
                        "className": "person",
                        "confidence": 99.46,
                        "coordinateX": "top-[1191.5px]",
                        "coordinateY": "top-[423.5px]",
                        "coordinates": [
                            1191.5,
                            423.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.8,
                        "coordinateX": "top-[572.0px]",
                        "coordinateY": "top-[809.0px]",
                        "coordinates": [
                            572.0,
                            809.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.76,
                        "coordinateX": "top-[1057.5px]",
                        "coordinateY": "top-[488.0px]",
                        "coordinates": [
                            1057.5,
                            488.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.71,
                        "coordinateX": "top-[1579.0px]",
                        "coordinateY": "top-[245.5px]",
                        "coordinates": [
                            1579.0,
                            245.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.67,
                        "coordinateX": "top-[933.5px]",
                        "coordinateY": "top-[246.0px]",
                        "coordinates": [
                            933.5,
                            246.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.41,
                        "coordinateX": "top-[1281.0px]",
                        "coordinateY": "top-[513.0px]",
                        "coordinates": [
                            1281.0,
                            513.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.91,
                        "coordinateX": "top-[1405.0px]",
                        "coordinateY": "top-[87.5px]",
                        "coordinates": [
                            1405.0,
                            87.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.65,
                        "coordinateX": "top-[968.0px]",
                        "coordinateY": "top-[526.0px]",
                        "coordinates": [
                            968.0,
                            526.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.54,
                        "coordinateX": "top-[964.0px]",
                        "coordinateY": "top-[679.0px]",
                        "coordinates": [
                            964.0,
                            679.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.41,
                        "coordinateX": "top-[744.5px]",
                        "coordinateY": "top-[609.5px]",
                        "coordinates": [
                            744.5,
                            609.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.35,
                        "coordinateX": "top-[236.0px]",
                        "coordinateY": "top-[948.0px]",
                        "coordinates": [
                            236.0,
                            948.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 96.42,
                        "coordinateX": "top-[238.5px]",
                        "coordinateY": "top-[91.5px]",
                        "coordinates": [
                            238.5,
                            91.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.92,
                        "coordinateX": "top-[704.5px]",
                        "coordinateY": "top-[170.0px]",
                        "coordinates": [
                            704.5,
                            170.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.81,
                        "coordinateX": "top-[1192.5px]",
                        "coordinateY": "top-[171.0px]",
                        "coordinates": [
                            1192.5,
                            171.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.74,
                        "coordinateX": "top-[1854.5px]",
                        "coordinateY": "top-[563.0px]",
                        "coordinates": [
                            1854.5,
                            563.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.6,
                        "coordinateX": "top-[1089.0px]",
                        "coordinateY": "top-[347.5px]",
                        "coordinates": [
                            1089.0,
                            347.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.66,
                        "coordinateX": "top-[549.0px]",
                        "coordinateY": "top-[631.5px]",
                        "coordinates": [
                            549.0,
                            631.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.29,
                        "coordinateX": "top-[32.0px]",
                        "coordinateY": "top-[671.0px]",
                        "coordinates": [
                            32.0,
                            671.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 92.31,
                        "coordinateX": "top-[839.0px]",
                        "coordinateY": "top-[66.0px]",
                        "coordinates": [
                            839.0,
                            66.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.82,
                        "coordinateX": "top-[1795.0px]",
                        "coordinateY": "top-[191.0px]",
                        "coordinates": [
                            1795.0,
                            191.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.4,
                        "coordinateX": "top-[741.5px]",
                        "coordinateY": "top-[96.5px]",
                        "coordinates": [
                            741.5,
                            96.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.28,
                        "coordinateX": "top-[424.5px]",
                        "coordinateY": "top-[554.5px]",
                        "coordinates": [
                            424.5,
                            554.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 89.32,
                        "coordinateX": "top-[1777.5px]",
                        "coordinateY": "top-[303.0px]",
                        "coordinates": [
                            1777.5,
                            303.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 88.36,
                        "coordinateX": "top-[359.0px]",
                        "coordinateY": "top-[532.5px]",
                        "coordinates": [
                            359.0,
                            532.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 87.12,
                        "coordinateX": "top-[469.0px]",
                        "coordinateY": "top-[70.5px]",
                        "coordinates": [
                            469.0,
                            70.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 86.02,
                        "coordinateX": "top-[1851.0px]",
                        "coordinateY": "top-[179.5px]",
                        "coordinates": [
                            1851.0,
                            179.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 81.99,
                        "coordinateX": "top-[94.0px]",
                        "coordinateY": "top-[171.5px]",
                        "coordinates": [
                            94.0,
                            171.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 79.56,
                        "coordinateX": "top-[1017.5px]",
                        "coordinateY": "top-[35.0px]",
                        "coordinates": [
                            1017.5,
                            35.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 79.24,
                        "coordinateX": "top-[880.5px]",
                        "coordinateY": "top-[65.5px]",
                        "coordinates": [
                            880.5,
                            65.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 71.38,
                        "coordinateX": "top-[1531.0px]",
                        "coordinateY": "top-[17.5px]",
                        "coordinates": [
                            1531.0,
                            17.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 69.87,
                        "coordinateX": "top-[1240.0px]",
                        "coordinateY": "top-[37.0px]",
                        "coordinates": [
                            1240.0,
                            37.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 68.4,
                        "coordinateX": "top-[456.0px]",
                        "coordinateY": "top-[534.0px]",
                        "coordinates": [
                            456.0,
                            534.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 67.87,
                        "coordinateX": "top-[954.5px]",
                        "coordinateY": "top-[34.5px]",
                        "coordinates": [
                            954.5,
                            34.5
                        ]
                    },
                    {
                        "className": "handbag",
                        "confidence": 57.94,
                        "coordinateX": "top-[698.0px]",
                        "coordinateY": "top-[640.5px]",
                        "coordinates": [
                            698.0,
                            640.5
                        ]
                    }
                ],
                "image": "Screenshot (310).png",
                "imageHight": 1080,
                "imageWidth": 1920
            },
            {
                "coordinatesArray": [
                    [
                        932.0,
                        347.0
                    ],
                    [
                        1268.0,
                        359.0
                    ],
                    [
                        976.5,
                        861.0
                    ],
                    [
                        1220.5,
                        570.0
                    ],
                    [
                        1049.0,
                        365.0
                    ],
                    [
                        1092.5,
                        245.5
                    ],
                    [
                        802.5,
                        968.0
                    ],
                    [
                        1538.0,
                        160.5
                    ],
                    [
                        523.0,
                        794.5
                    ],
                    [
                        1834.0,
                        239.5
                    ],
                    [
                        558.5,
                        1001.5
                    ],
                    [
                        722.0,
                        466.5
                    ],
                    [
                        1399.5,
                        87.0
                    ],
                    [
                        1016.0,
                        682.5
                    ],
                    [
                        597.0,
                        71.0
                    ],
                    [
                        141.5,
                        834.0
                    ],
                    [
                        706.5,
                        79.5
                    ],
                    [
                        1231.0,
                        96.5
                    ],
                    [
                        962.5,
                        59.5
                    ],
                    [
                        412.0,
                        556.0
                    ],
                    [
                        1018.0,
                        66.5
                    ],
                    [
                        355.0,
                        534.5
                    ],
                    [
                        750.0,
                        48.0
                    ],
                    [
                        1798.5,
                        402.0
                    ],
                    [
                        1891.5,
                        241.5
                    ],
                    [
                        1870.0,
                        242.0
                    ],
                    [
                        1903.0,
                        25.0
                    ],
                    [
                        835.0,
                        39.5
                    ],
                    [
                        877.0,
                        38.5
                    ],
                    [
                        464.0,
                        535.0
                    ],
                    [
                        237.0,
                        152.0
                    ],
                    [
                        68.5,
                        179.0
                    ],
                    [
                        1720.0,
                        20.0
                    ]
                ],
                "detections": [
                    {
                        "className": "person",
                        "confidence": 99.85,
                        "coordinateX": "top-[932.0px]",
                        "coordinateY": "top-[347.0px]",
                        "coordinates": [
                            932.0,
                            347.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.8,
                        "coordinateX": "top-[1268.0px]",
                        "coordinateY": "top-[359.0px]",
                        "coordinates": [
                            1268.0,
                            359.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.75,
                        "coordinateX": "top-[976.5px]",
                        "coordinateY": "top-[861.0px]",
                        "coordinates": [
                            976.5,
                            861.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.67,
                        "coordinateX": "top-[1220.5px]",
                        "coordinateY": "top-[570.0px]",
                        "coordinates": [
                            1220.5,
                            570.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.58,
                        "coordinateX": "top-[1049.0px]",
                        "coordinateY": "top-[365.0px]",
                        "coordinates": [
                            1049.0,
                            365.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.54,
                        "coordinateX": "top-[1092.5px]",
                        "coordinateY": "top-[245.5px]",
                        "coordinates": [
                            1092.5,
                            245.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.46,
                        "coordinateX": "top-[802.5px]",
                        "coordinateY": "top-[968.0px]",
                        "coordinates": [
                            802.5,
                            968.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.94,
                        "coordinateX": "top-[1538.0px]",
                        "coordinateY": "top-[160.5px]",
                        "coordinates": [
                            1538.0,
                            160.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.52,
                        "coordinateX": "top-[523.0px]",
                        "coordinateY": "top-[794.5px]",
                        "coordinates": [
                            523.0,
                            794.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.25,
                        "coordinateX": "top-[1834.0px]",
                        "coordinateY": "top-[239.5px]",
                        "coordinates": [
                            1834.0,
                            239.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.99,
                        "coordinateX": "top-[558.5px]",
                        "coordinateY": "top-[1001.5px]",
                        "coordinates": [
                            558.5,
                            1001.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.7,
                        "coordinateX": "top-[722.0px]",
                        "coordinateY": "top-[466.5px]",
                        "coordinates": [
                            722.0,
                            466.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.6,
                        "coordinateX": "top-[1399.5px]",
                        "coordinateY": "top-[87.0px]",
                        "coordinates": [
                            1399.5,
                            87.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.52,
                        "coordinateX": "top-[1016.0px]",
                        "coordinateY": "top-[682.5px]",
                        "coordinates": [
                            1016.0,
                            682.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.34,
                        "coordinateX": "top-[597.0px]",
                        "coordinateY": "top-[71.0px]",
                        "coordinates": [
                            597.0,
                            71.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.3,
                        "coordinateX": "top-[141.5px]",
                        "coordinateY": "top-[834.0px]",
                        "coordinates": [
                            141.5,
                            834.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 96.09,
                        "coordinateX": "top-[706.5px]",
                        "coordinateY": "top-[79.5px]",
                        "coordinates": [
                            706.5,
                            79.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.95,
                        "coordinateX": "top-[1231.0px]",
                        "coordinateY": "top-[96.5px]",
                        "coordinates": [
                            1231.0,
                            96.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.67,
                        "coordinateX": "top-[962.5px]",
                        "coordinateY": "top-[59.5px]",
                        "coordinates": [
                            962.5,
                            59.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.49,
                        "coordinateX": "top-[412.0px]",
                        "coordinateY": "top-[556.0px]",
                        "coordinates": [
                            412.0,
                            556.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 89.5,
                        "coordinateX": "top-[1018.0px]",
                        "coordinateY": "top-[66.5px]",
                        "coordinates": [
                            1018.0,
                            66.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 88.1,
                        "coordinateX": "top-[355.0px]",
                        "coordinateY": "top-[534.5px]",
                        "coordinates": [
                            355.0,
                            534.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 87.21,
                        "coordinateX": "top-[750.0px]",
                        "coordinateY": "top-[48.0px]",
                        "coordinates": [
                            750.0,
                            48.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 87.13,
                        "coordinateX": "top-[1798.5px]",
                        "coordinateY": "top-[402.0px]",
                        "coordinates": [
                            1798.5,
                            402.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 86.78,
                        "coordinateX": "top-[1891.5px]",
                        "coordinateY": "top-[241.5px]",
                        "coordinates": [
                            1891.5,
                            241.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 85.71,
                        "coordinateX": "top-[1870.0px]",
                        "coordinateY": "top-[242.0px]",
                        "coordinates": [
                            1870.0,
                            242.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 81.61,
                        "coordinateX": "top-[1903.0px]",
                        "coordinateY": "top-[25.0px]",
                        "coordinates": [
                            1903.0,
                            25.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 80.11,
                        "coordinateX": "top-[835.0px]",
                        "coordinateY": "top-[39.5px]",
                        "coordinates": [
                            835.0,
                            39.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 78.7,
                        "coordinateX": "top-[877.0px]",
                        "coordinateY": "top-[38.5px]",
                        "coordinates": [
                            877.0,
                            38.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 75.36,
                        "coordinateX": "top-[464.0px]",
                        "coordinateY": "top-[535.0px]",
                        "coordinates": [
                            464.0,
                            535.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 73.86,
                        "coordinateX": "top-[237.0px]",
                        "coordinateY": "top-[152.0px]",
                        "coordinates": [
                            237.0,
                            152.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 72.83,
                        "coordinateX": "top-[68.5px]",
                        "coordinateY": "top-[179.0px]",
                        "coordinates": [
                            68.5,
                            179.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 53.15,
                        "coordinateX": "top-[1720.0px]",
                        "coordinateY": "top-[20.0px]",
                        "coordinates": [
                            1720.0,
                            20.0
                        ]
                    }
                ],
                "image": "Screenshot (311).png",
                "imageHight": 1080,
                "imageWidth": 1920
            },
            {
                "coordinatesArray": [
                    [
                        1267.5,
                        234.0
                    ],
                    [
                        780.0,
                        758.0
                    ],
                    [
                        945.5,
                        446.5
                    ],
                    [
                        1049.0,
                        255.5
                    ],
                    [
                        1495.0,
                        77.5
                    ],
                    [
                        70.5,
                        178.0
                    ],
                    [
                        1092.0,
                        155.0
                    ],
                    [
                        265.0,
                        1013.5
                    ],
                    [
                        1261.0,
                        738.0
                    ],
                    [
                        489.5,
                        979.0
                    ],
                    [
                        361.0,
                        532.0
                    ],
                    [
                        1014.0,
                        1028.5
                    ],
                    [
                        1285.0,
                        48.5
                    ],
                    [
                        234.0,
                        192.0
                    ],
                    [
                        1399.5,
                        78.5
                    ],
                    [
                        733.0,
                        347.0
                    ],
                    [
                        1815.5,
                        489.5
                    ],
                    [
                        1372.0,
                        1015.5
                    ],
                    [
                        963.0,
                        107.5
                    ],
                    [
                        1048.5,
                        862.0
                    ],
                    [
                        1877.5,
                        285.5
                    ],
                    [
                        1017.5,
                        110.5
                    ],
                    [
                        415.0,
                        552.0
                    ],
                    [
                        1235.0,
                        34.0
                    ],
                    [
                        14.0,
                        303.0
                    ],
                    [
                        1539.5,
                        1050.5
                    ],
                    [
                        468.0,
                        531.0
                    ],
                    [
                        717.5,
                        73.5
                    ],
                    [
                        173.5,
                        12.5
                    ],
                    [
                        1859.0,
                        174.0
                    ],
                    [
                        1164.0,
                        35.5
                    ]
                ],
                "detections": [
                    {
                        "className": "person",
                        "confidence": 99.88,
                        "coordinateX": "top-[1267.5px]",
                        "coordinateY": "top-[234.0px]",
                        "coordinates": [
                            1267.5,
                            234.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.38,
                        "coordinateX": "top-[780.0px]",
                        "coordinateY": "top-[758.0px]",
                        "coordinates": [
                            780.0,
                            758.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.24,
                        "coordinateX": "top-[945.5px]",
                        "coordinateY": "top-[446.5px]",
                        "coordinates": [
                            945.5,
                            446.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.19,
                        "coordinateX": "top-[1049.0px]",
                        "coordinateY": "top-[255.5px]",
                        "coordinates": [
                            1049.0,
                            255.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.78,
                        "coordinateX": "top-[1495.0px]",
                        "coordinateY": "top-[77.5px]",
                        "coordinates": [
                            1495.0,
                            77.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.44,
                        "coordinateX": "top-[70.5px]",
                        "coordinateY": "top-[178.0px]",
                        "coordinates": [
                            70.5,
                            178.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.01,
                        "coordinateX": "top-[1092.0px]",
                        "coordinateY": "top-[155.0px]",
                        "coordinates": [
                            1092.0,
                            155.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.98,
                        "coordinateX": "top-[265.0px]",
                        "coordinateY": "top-[1013.5px]",
                        "coordinates": [
                            265.0,
                            1013.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.77,
                        "coordinateX": "top-[1261.0px]",
                        "coordinateY": "top-[738.0px]",
                        "coordinates": [
                            1261.0,
                            738.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 96.54,
                        "coordinateX": "top-[489.5px]",
                        "coordinateY": "top-[979.0px]",
                        "coordinates": [
                            489.5,
                            979.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.54,
                        "coordinateX": "top-[361.0px]",
                        "coordinateY": "top-[532.0px]",
                        "coordinates": [
                            361.0,
                            532.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.5,
                        "coordinateX": "top-[1014.0px]",
                        "coordinateY": "top-[1028.5px]",
                        "coordinates": [
                            1014.0,
                            1028.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.35,
                        "coordinateX": "top-[1285.0px]",
                        "coordinateY": "top-[48.5px]",
                        "coordinates": [
                            1285.0,
                            48.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.18,
                        "coordinateX": "top-[234.0px]",
                        "coordinateY": "top-[192.0px]",
                        "coordinates": [
                            234.0,
                            192.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.92,
                        "coordinateX": "top-[1399.5px]",
                        "coordinateY": "top-[78.5px]",
                        "coordinates": [
                            1399.5,
                            78.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.47,
                        "coordinateX": "top-[733.0px]",
                        "coordinateY": "top-[347.0px]",
                        "coordinates": [
                            733.0,
                            347.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.29,
                        "coordinateX": "top-[1815.5px]",
                        "coordinateY": "top-[489.5px]",
                        "coordinates": [
                            1815.5,
                            489.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 92.65,
                        "coordinateX": "top-[1372.0px]",
                        "coordinateY": "top-[1015.5px]",
                        "coordinates": [
                            1372.0,
                            1015.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 92.13,
                        "coordinateX": "top-[963.0px]",
                        "coordinateY": "top-[107.5px]",
                        "coordinates": [
                            963.0,
                            107.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.42,
                        "coordinateX": "top-[1048.5px]",
                        "coordinateY": "top-[862.0px]",
                        "coordinates": [
                            1048.5,
                            862.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 90.71,
                        "coordinateX": "top-[1877.5px]",
                        "coordinateY": "top-[285.5px]",
                        "coordinates": [
                            1877.5,
                            285.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 85.23,
                        "coordinateX": "top-[1017.5px]",
                        "coordinateY": "top-[110.5px]",
                        "coordinates": [
                            1017.5,
                            110.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 84.01,
                        "coordinateX": "top-[415.0px]",
                        "coordinateY": "top-[552.0px]",
                        "coordinates": [
                            415.0,
                            552.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 82.8,
                        "coordinateX": "top-[1235.0px]",
                        "coordinateY": "top-[34.0px]",
                        "coordinates": [
                            1235.0,
                            34.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 81.97,
                        "coordinateX": "top-[14.0px]",
                        "coordinateY": "top-[303.0px]",
                        "coordinates": [
                            14.0,
                            303.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 81.84,
                        "coordinateX": "top-[1539.5px]",
                        "coordinateY": "top-[1050.5px]",
                        "coordinates": [
                            1539.5,
                            1050.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 81.64,
                        "coordinateX": "top-[468.0px]",
                        "coordinateY": "top-[531.0px]",
                        "coordinates": [
                            468.0,
                            531.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 80.73,
                        "coordinateX": "top-[717.5px]",
                        "coordinateY": "top-[73.5px]",
                        "coordinates": [
                            717.5,
                            73.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 75.06,
                        "coordinateX": "top-[173.5px]",
                        "coordinateY": "top-[12.5px]",
                        "coordinates": [
                            173.5,
                            12.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 72.66,
                        "coordinateX": "top-[1859.0px]",
                        "coordinateY": "top-[174.0px]",
                        "coordinates": [
                            1859.0,
                            174.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 71.9,
                        "coordinateX": "top-[1164.0px]",
                        "coordinateY": "top-[35.5px]",
                        "coordinates": [
                            1164.0,
                            35.5
                        ]
                    }
                ],
                "image": "Screenshot (312).png",
                "imageHight": 1080,
                "imageWidth": 1920
            },
            {
                "coordinatesArray": [
                    [
                        1556.5,
                        906.5
                    ],
                    [
                        745.0,
                        274.5
                    ],
                    [
                        1276.0,
                        168.0
                    ],
                    [
                        1284.5,
                        903.0
                    ],
                    [
                        779.0,
                        638.5
                    ],
                    [
                        1055.0,
                        201.5
                    ],
                    [
                        962.5,
                        156.0
                    ],
                    [
                        1745.5,
                        141.5
                    ],
                    [
                        1079.5,
                        109.0
                    ],
                    [
                        1207.0,
                        877.5
                    ],
                    [
                        961.5,
                        549.0
                    ],
                    [
                        68.5,
                        181.0
                    ],
                    [
                        1869.0,
                        99.5
                    ],
                    [
                        819.5,
                        68.0
                    ],
                    [
                        1456.0,
                        50.0
                    ],
                    [
                        205.5,
                        242.0
                    ],
                    [
                        404.0,
                        550.5
                    ],
                    [
                        1825.5,
                        590.0
                    ],
                    [
                        1398.0,
                        86.5
                    ],
                    [
                        1897.0,
                        338.0
                    ],
                    [
                        1050.0,
                        1008.5
                    ],
                    [
                        1017.5,
                        159.0
                    ],
                    [
                        1894.0,
                        180.0
                    ],
                    [
                        361.0,
                        531.5
                    ],
                    [
                        1802.5,
                        111.5
                    ],
                    [
                        1233.5,
                        35.5
                    ],
                    [
                        716.5,
                        13.5
                    ],
                    [
                        1164.5,
                        37.0
                    ],
                    [
                        970.5,
                        55.5
                    ],
                    [
                        1300.0,
                        32.0
                    ],
                    [
                        16.0,
                        343.5
                    ],
                    [
                        456.5,
                        548.0
                    ],
                    [
                        310.0,
                        11.5
                    ],
                    [
                        483.5,
                        548.5
                    ]
                ],
                "detections": [
                    {
                        "className": "person",
                        "confidence": 99.15,
                        "coordinateX": "top-[1556.5px]",
                        "coordinateY": "top-[906.5px]",
                        "coordinates": [
                            1556.5,
                            906.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.98,
                        "coordinateX": "top-[745.0px]",
                        "coordinateY": "top-[274.5px]",
                        "coordinates": [
                            745.0,
                            274.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.93,
                        "coordinateX": "top-[1276.0px]",
                        "coordinateY": "top-[168.0px]",
                        "coordinates": [
                            1276.0,
                            168.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.42,
                        "coordinateX": "top-[1284.5px]",
                        "coordinateY": "top-[903.0px]",
                        "coordinates": [
                            1284.5,
                            903.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.04,
                        "coordinateX": "top-[779.0px]",
                        "coordinateY": "top-[638.5px]",
                        "coordinates": [
                            779.0,
                            638.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 96.71,
                        "coordinateX": "top-[1055.0px]",
                        "coordinateY": "top-[201.5px]",
                        "coordinates": [
                            1055.0,
                            201.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 96.35,
                        "coordinateX": "top-[962.5px]",
                        "coordinateY": "top-[156.0px]",
                        "coordinates": [
                            962.5,
                            156.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 96.16,
                        "coordinateX": "top-[1745.5px]",
                        "coordinateY": "top-[141.5px]",
                        "coordinates": [
                            1745.5,
                            141.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.96,
                        "coordinateX": "top-[1079.5px]",
                        "coordinateY": "top-[109.0px]",
                        "coordinates": [
                            1079.5,
                            109.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.41,
                        "coordinateX": "top-[1207.0px]",
                        "coordinateY": "top-[877.5px]",
                        "coordinates": [
                            1207.0,
                            877.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.81,
                        "coordinateX": "top-[961.5px]",
                        "coordinateY": "top-[549.0px]",
                        "coordinates": [
                            961.5,
                            549.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.39,
                        "coordinateX": "top-[68.5px]",
                        "coordinateY": "top-[181.0px]",
                        "coordinates": [
                            68.5,
                            181.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 94.34,
                        "coordinateX": "top-[1869.0px]",
                        "coordinateY": "top-[99.5px]",
                        "coordinates": [
                            1869.0,
                            99.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.52,
                        "coordinateX": "top-[819.5px]",
                        "coordinateY": "top-[68.0px]",
                        "coordinates": [
                            819.5,
                            68.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 90.64,
                        "coordinateX": "top-[1456.0px]",
                        "coordinateY": "top-[50.0px]",
                        "coordinates": [
                            1456.0,
                            50.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 90.03,
                        "coordinateX": "top-[205.5px]",
                        "coordinateY": "top-[242.0px]",
                        "coordinates": [
                            205.5,
                            242.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 88.76,
                        "coordinateX": "top-[404.0px]",
                        "coordinateY": "top-[550.5px]",
                        "coordinates": [
                            404.0,
                            550.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 88.5,
                        "coordinateX": "top-[1825.5px]",
                        "coordinateY": "top-[590.0px]",
                        "coordinates": [
                            1825.5,
                            590.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 87.17,
                        "coordinateX": "top-[1398.0px]",
                        "coordinateY": "top-[86.5px]",
                        "coordinates": [
                            1398.0,
                            86.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 86.48,
                        "coordinateX": "top-[1897.0px]",
                        "coordinateY": "top-[338.0px]",
                        "coordinates": [
                            1897.0,
                            338.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 84.32,
                        "coordinateX": "top-[1050.0px]",
                        "coordinateY": "top-[1008.5px]",
                        "coordinates": [
                            1050.0,
                            1008.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 83.6,
                        "coordinateX": "top-[1017.5px]",
                        "coordinateY": "top-[159.0px]",
                        "coordinates": [
                            1017.5,
                            159.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 81.43,
                        "coordinateX": "top-[1894.0px]",
                        "coordinateY": "top-[180.0px]",
                        "coordinates": [
                            1894.0,
                            180.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 80.16,
                        "coordinateX": "top-[361.0px]",
                        "coordinateY": "top-[531.5px]",
                        "coordinates": [
                            361.0,
                            531.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 79.82,
                        "coordinateX": "top-[1802.5px]",
                        "coordinateY": "top-[111.5px]",
                        "coordinates": [
                            1802.5,
                            111.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 71.49,
                        "coordinateX": "top-[1233.5px]",
                        "coordinateY": "top-[35.5px]",
                        "coordinates": [
                            1233.5,
                            35.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 69.57,
                        "coordinateX": "top-[716.5px]",
                        "coordinateY": "top-[13.5px]",
                        "coordinates": [
                            716.5,
                            13.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 68.48,
                        "coordinateX": "top-[1164.5px]",
                        "coordinateY": "top-[37.0px]",
                        "coordinates": [
                            1164.5,
                            37.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 65.68,
                        "coordinateX": "top-[970.5px]",
                        "coordinateY": "top-[55.5px]",
                        "coordinates": [
                            970.5,
                            55.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 62.18,
                        "coordinateX": "top-[1300.0px]",
                        "coordinateY": "top-[32.0px]",
                        "coordinates": [
                            1300.0,
                            32.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 61.77,
                        "coordinateX": "top-[16.0px]",
                        "coordinateY": "top-[343.5px]",
                        "coordinates": [
                            16.0,
                            343.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 59.29,
                        "coordinateX": "top-[456.5px]",
                        "coordinateY": "top-[548.0px]",
                        "coordinates": [
                            456.5,
                            548.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 57.52,
                        "coordinateX": "top-[310.0px]",
                        "coordinateY": "top-[11.5px]",
                        "coordinates": [
                            310.0,
                            11.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 51.03,
                        "coordinateX": "top-[483.5px]",
                        "coordinateY": "top-[548.5px]",
                        "coordinates": [
                            483.5,
                            548.5
                        ]
                    }
                ],
                "image": "Screenshot (313).png",
                "imageHight": 1080,
                "imageWidth": 1920
            },
            {
                "coordinatesArray": [
                    [
                        963.5,
                        196.0
                    ],
                    [
                        758.5,
                        214.0
                    ],
                    [
                        1294.5,
                        110.0
                    ],
                    [
                        1310.0,
                        1032.0
                    ],
                    [
                        790.5,
                        548.5
                    ],
                    [
                        1574.0,
                        769.5
                    ],
                    [
                        1652.5,
                        112.5
                    ],
                    [
                        966.5,
                        654.0
                    ],
                    [
                        174.5,
                        296.5
                    ],
                    [
                        1758.5,
                        70.0
                    ],
                    [
                        63.5,
                        183.5
                    ],
                    [
                        1470.5,
                        984.5
                    ],
                    [
                        54.5,
                        721.5
                    ],
                    [
                        1098.0,
                        755.0
                    ],
                    [
                        1822.0,
                        68.0
                    ],
                    [
                        1021.5,
                        199.0
                    ],
                    [
                        23.5,
                        406.0
                    ],
                    [
                        1065.0,
                        67.0
                    ],
                    [
                        407.5,
                        552.0
                    ],
                    [
                        1870.0,
                        680.5
                    ],
                    [
                        1398.5,
                        91.0
                    ],
                    [
                        470.0,
                        544.0
                    ],
                    [
                        361.0,
                        530.5
                    ],
                    [
                        888.5,
                        58.5
                    ],
                    [
                        1857.5,
                        155.5
                    ],
                    [
                        1065.5,
                        156.0
                    ],
                    [
                        1230.0,
                        36.0
                    ],
                    [
                        651.5,
                        14.0
                    ],
                    [
                        1163.0,
                        36.5
                    ],
                    [
                        1677.5,
                        110.5
                    ],
                    [
                        1870.0,
                        192.0
                    ],
                    [
                        1003.0,
                        92.0
                    ]
                ],
                "detections": [
                    {
                        "className": "person",
                        "confidence": 99.71,
                        "coordinateX": "top-[963.5px]",
                        "coordinateY": "top-[196.0px]",
                        "coordinates": [
                            963.5,
                            196.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.27,
                        "coordinateX": "top-[758.5px]",
                        "coordinateY": "top-[214.0px]",
                        "coordinates": [
                            758.5,
                            214.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.11,
                        "coordinateX": "top-[1294.5px]",
                        "coordinateY": "top-[110.0px]",
                        "coordinates": [
                            1294.5,
                            110.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.89,
                        "coordinateX": "top-[1310.0px]",
                        "coordinateY": "top-[1032.0px]",
                        "coordinates": [
                            1310.0,
                            1032.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.73,
                        "coordinateX": "top-[790.5px]",
                        "coordinateY": "top-[548.5px]",
                        "coordinates": [
                            790.5,
                            548.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.49,
                        "coordinateX": "top-[1574.0px]",
                        "coordinateY": "top-[769.5px]",
                        "coordinates": [
                            1574.0,
                            769.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.26,
                        "coordinateX": "top-[1652.5px]",
                        "coordinateY": "top-[112.5px]",
                        "coordinates": [
                            1652.5,
                            112.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.1,
                        "coordinateX": "top-[966.5px]",
                        "coordinateY": "top-[654.0px]",
                        "coordinates": [
                            966.5,
                            654.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.63,
                        "coordinateX": "top-[174.5px]",
                        "coordinateY": "top-[296.5px]",
                        "coordinates": [
                            174.5,
                            296.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.11,
                        "coordinateX": "top-[1758.5px]",
                        "coordinateY": "top-[70.0px]",
                        "coordinates": [
                            1758.5,
                            70.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.38,
                        "coordinateX": "top-[63.5px]",
                        "coordinateY": "top-[183.5px]",
                        "coordinates": [
                            63.5,
                            183.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.19,
                        "coordinateX": "top-[1470.5px]",
                        "coordinateY": "top-[984.5px]",
                        "coordinates": [
                            1470.5,
                            984.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.15,
                        "coordinateX": "top-[54.5px]",
                        "coordinateY": "top-[721.5px]",
                        "coordinates": [
                            54.5,
                            721.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.66,
                        "coordinateX": "top-[1098.0px]",
                        "coordinateY": "top-[755.0px]",
                        "coordinates": [
                            1098.0,
                            755.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 93.13,
                        "coordinateX": "top-[1822.0px]",
                        "coordinateY": "top-[68.0px]",
                        "coordinates": [
                            1822.0,
                            68.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 92.77,
                        "coordinateX": "top-[1021.5px]",
                        "coordinateY": "top-[199.0px]",
                        "coordinates": [
                            1021.5,
                            199.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.65,
                        "coordinateX": "top-[23.5px]",
                        "coordinateY": "top-[406.0px]",
                        "coordinates": [
                            23.5,
                            406.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.09,
                        "coordinateX": "top-[1065.0px]",
                        "coordinateY": "top-[67.0px]",
                        "coordinates": [
                            1065.0,
                            67.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 89.57,
                        "coordinateX": "top-[407.5px]",
                        "coordinateY": "top-[552.0px]",
                        "coordinates": [
                            407.5,
                            552.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 88.79,
                        "coordinateX": "top-[1870.0px]",
                        "coordinateY": "top-[680.5px]",
                        "coordinates": [
                            1870.0,
                            680.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 88.09,
                        "coordinateX": "top-[1398.5px]",
                        "coordinateY": "top-[91.0px]",
                        "coordinates": [
                            1398.5,
                            91.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 87.28,
                        "coordinateX": "top-[470.0px]",
                        "coordinateY": "top-[544.0px]",
                        "coordinates": [
                            470.0,
                            544.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 87.03,
                        "coordinateX": "top-[361.0px]",
                        "coordinateY": "top-[530.5px]",
                        "coordinates": [
                            361.0,
                            530.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 86.73,
                        "coordinateX": "top-[888.5px]",
                        "coordinateY": "top-[58.5px]",
                        "coordinates": [
                            888.5,
                            58.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 86.55,
                        "coordinateX": "top-[1857.5px]",
                        "coordinateY": "top-[155.5px]",
                        "coordinates": [
                            1857.5,
                            155.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 81.92,
                        "coordinateX": "top-[1065.5px]",
                        "coordinateY": "top-[156.0px]",
                        "coordinates": [
                            1065.5,
                            156.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 78.31,
                        "coordinateX": "top-[1230.0px]",
                        "coordinateY": "top-[36.0px]",
                        "coordinates": [
                            1230.0,
                            36.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 70.26,
                        "coordinateX": "top-[651.5px]",
                        "coordinateY": "top-[14.0px]",
                        "coordinates": [
                            651.5,
                            14.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 65.15,
                        "coordinateX": "top-[1163.0px]",
                        "coordinateY": "top-[36.5px]",
                        "coordinates": [
                            1163.0,
                            36.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 64.16,
                        "coordinateX": "top-[1677.5px]",
                        "coordinateY": "top-[110.5px]",
                        "coordinates": [
                            1677.5,
                            110.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 63.77,
                        "coordinateX": "top-[1870.0px]",
                        "coordinateY": "top-[192.0px]",
                        "coordinates": [
                            1870.0,
                            192.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 51.91,
                        "coordinateX": "top-[1003.0px]",
                        "coordinateY": "top-[92.0px]",
                        "coordinates": [
                            1003.0,
                            92.0
                        ]
                    }
                ],
                "image": "Screenshot (314).png",
                "imageHight": 1080,
                "imageWidth": 1920
            },
            {
                "coordinatesArray": [
                    [
                        1596.5,
                        670.5
                    ],
                    [
                        1452.5,
                        1005.0
                    ],
                    [
                        972.5,
                        224.0
                    ],
                    [
                        1460.5,
                        868.0
                    ],
                    [
                        1301.5,
                        70.5
                    ],
                    [
                        971.0,
                        732.5
                    ],
                    [
                        795.5,
                        470.0
                    ],
                    [
                        769.5,
                        169.5
                    ],
                    [
                        48.0,
                        190.0
                    ],
                    [
                        112.5,
                        782.5
                    ],
                    [
                        1188.5,
                        1018.0
                    ],
                    [
                        1038.0,
                        681.5
                    ],
                    [
                        166.5,
                        318.5
                    ],
                    [
                        470.5,
                        532.5
                    ],
                    [
                        1638.5,
                        74.5
                    ],
                    [
                        363.5,
                        525.0
                    ],
                    [
                        1409.0,
                        78.5
                    ],
                    [
                        1896.5,
                        368.0
                    ],
                    [
                        1023.5,
                        107.0
                    ],
                    [
                        1724.0,
                        47.5
                    ],
                    [
                        1789.0,
                        49.0
                    ],
                    [
                        1029.0,
                        221.0
                    ],
                    [
                        1233.0,
                        34.0
                    ],
                    [
                        1596.0,
                        78.0
                    ],
                    [
                        401.5,
                        534.0
                    ],
                    [
                        1831.0,
                        138.5
                    ],
                    [
                        41.5,
                        432.0
                    ],
                    [
                        1164.5,
                        35.0
                    ],
                    [
                        418.5,
                        548.0
                    ],
                    [
                        945.0,
                        54.5
                    ],
                    [
                        1063.0,
                        112.0
                    ]
                ],
                "detections": [
                    {
                        "className": "person",
                        "confidence": 99.3,
                        "coordinateX": "top-[1596.5px]",
                        "coordinateY": "top-[670.5px]",
                        "coordinates": [
                            1596.5,
                            670.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.28,
                        "coordinateX": "top-[1452.5px]",
                        "coordinateY": "top-[1005.0px]",
                        "coordinates": [
                            1452.5,
                            1005.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 99.22,
                        "coordinateX": "top-[972.5px]",
                        "coordinateY": "top-[224.0px]",
                        "coordinates": [
                            972.5,
                            224.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.96,
                        "coordinateX": "top-[1460.5px]",
                        "coordinateY": "top-[868.0px]",
                        "coordinates": [
                            1460.5,
                            868.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.92,
                        "coordinateX": "top-[1301.5px]",
                        "coordinateY": "top-[70.5px]",
                        "coordinates": [
                            1301.5,
                            70.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.79,
                        "coordinateX": "top-[971.0px]",
                        "coordinateY": "top-[732.5px]",
                        "coordinates": [
                            971.0,
                            732.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.64,
                        "coordinateX": "top-[795.5px]",
                        "coordinateY": "top-[470.0px]",
                        "coordinates": [
                            795.5,
                            470.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 98.16,
                        "coordinateX": "top-[769.5px]",
                        "coordinateY": "top-[169.5px]",
                        "coordinates": [
                            769.5,
                            169.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.93,
                        "coordinateX": "top-[48.0px]",
                        "coordinateY": "top-[190.0px]",
                        "coordinates": [
                            48.0,
                            190.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.85,
                        "coordinateX": "top-[112.5px]",
                        "coordinateY": "top-[782.5px]",
                        "coordinates": [
                            112.5,
                            782.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 97.17,
                        "coordinateX": "top-[1188.5px]",
                        "coordinateY": "top-[1018.0px]",
                        "coordinates": [
                            1188.5,
                            1018.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.84,
                        "coordinateX": "top-[1038.0px]",
                        "coordinateY": "top-[681.5px]",
                        "coordinates": [
                            1038.0,
                            681.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 95.2,
                        "coordinateX": "top-[166.5px]",
                        "coordinateY": "top-[318.5px]",
                        "coordinates": [
                            166.5,
                            318.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 91.71,
                        "coordinateX": "top-[470.5px]",
                        "coordinateY": "top-[532.5px]",
                        "coordinates": [
                            470.5,
                            532.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 90.77,
                        "coordinateX": "top-[1638.5px]",
                        "coordinateY": "top-[74.5px]",
                        "coordinates": [
                            1638.5,
                            74.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 90.5,
                        "coordinateX": "top-[363.5px]",
                        "coordinateY": "top-[525.0px]",
                        "coordinates": [
                            363.5,
                            525.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 89.46,
                        "coordinateX": "top-[1409.0px]",
                        "coordinateY": "top-[78.5px]",
                        "coordinates": [
                            1409.0,
                            78.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 85.94,
                        "coordinateX": "top-[1896.5px]",
                        "coordinateY": "top-[368.0px]",
                        "coordinates": [
                            1896.5,
                            368.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 84.69,
                        "coordinateX": "top-[1023.5px]",
                        "coordinateY": "top-[107.0px]",
                        "coordinates": [
                            1023.5,
                            107.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 83.85,
                        "coordinateX": "top-[1724.0px]",
                        "coordinateY": "top-[47.5px]",
                        "coordinates": [
                            1724.0,
                            47.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 81.18,
                        "coordinateX": "top-[1789.0px]",
                        "coordinateY": "top-[49.0px]",
                        "coordinates": [
                            1789.0,
                            49.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 80.59,
                        "coordinateX": "top-[1029.0px]",
                        "coordinateY": "top-[221.0px]",
                        "coordinates": [
                            1029.0,
                            221.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 79.08,
                        "coordinateX": "top-[1233.0px]",
                        "coordinateY": "top-[34.0px]",
                        "coordinates": [
                            1233.0,
                            34.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 77.44,
                        "coordinateX": "top-[1596.0px]",
                        "coordinateY": "top-[78.0px]",
                        "coordinates": [
                            1596.0,
                            78.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 74.62,
                        "coordinateX": "top-[401.5px]",
                        "coordinateY": "top-[534.0px]",
                        "coordinates": [
                            401.5,
                            534.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 71.57,
                        "coordinateX": "top-[1831.0px]",
                        "coordinateY": "top-[138.5px]",
                        "coordinates": [
                            1831.0,
                            138.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 70.93,
                        "coordinateX": "top-[41.5px]",
                        "coordinateY": "top-[432.0px]",
                        "coordinates": [
                            41.5,
                            432.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 62.46,
                        "coordinateX": "top-[1164.5px]",
                        "coordinateY": "top-[35.0px]",
                        "coordinates": [
                            1164.5,
                            35.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 62.33,
                        "coordinateX": "top-[418.5px]",
                        "coordinateY": "top-[548.0px]",
                        "coordinates": [
                            418.5,
                            548.0
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 62.23,
                        "coordinateX": "top-[945.0px]",
                        "coordinateY": "top-[54.5px]",
                        "coordinates": [
                            945.0,
                            54.5
                        ]
                    },
                    {
                        "className": "person",
                        "confidence": 59.76,
                        "coordinateX": "top-[1063.0px]",
                        "coordinateY": "top-[112.0px]",
                        "coordinates": [
                            1063.0,
                            112.0
                        ]
                    }
                ],
                "image": "Screenshot (315).png",
                "imageHight": 1080,
                "imageWidth": 1920
            }
          ]
        
        if(charts == 1){
            
            const canvas = global.document.getElementById("heat-map"); 
            global.document.getElementById("heat-map").style.opacity = 1
            global.document.getElementById("chartContainer").style.opacity = 0
            const heat = new HeatMap(canvas, Objects[Objects[counter]?counter:0].coordinatesArray);
            const strengthButton = document.getElementById("strength");
            strengthButton.addEventListener("input", (event) => {
                heat.draw(event.target.value / 100);
            }, false);
            heat.draw(0.85);
        }else{

           const dataArr = []
           
           Objects[Objects[counter]?counter:0].coordinatesArray.map((item)=>{
            dataArr.push({x:item[0],y:item[1],z:2})
           })
           global.document.getElementById("heat-map").style.opacity = 0
           global.document.getElementById("chartContainer").style.opacity = 1

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: false,
                zoomEnabled: false,
                title:{
                    text: " _ "
                },
                axisX: {
                    title: `Total People Count:${dataArr.length}`,
                    gridThickness: 0,
                    tickLength: 0,
                    lineThickness: 0,
                    labelFormatter: function(){
                      return " ";
                    } ,
                    minimum: 0,
                    maximum: 1920
                },
                axisY:{
                  
                    title: "",
                    gridThickness: 0,
                    tickLength: 0,
                    lineThickness: 0,
                    labelFormatter: function(){
                      return " ";
                    } ,
                    minimum: 0,
                    maximum: 1200
                },
                legend: {
                    cursor: "pointer"
                    
                },
                data: [{
                    type: "scatter",
                    toolTipContent: "<b>Gender: </b> <br/><b>Age Group: </b>",
                    dataPoints: dataArr
                }]
            });
            chart.render();

        }

        // progress bar 

        const canvas2 = document.getElementById("progressBar")
        const context = canvas2.getContext("2d");
        // width like var to use it later
        const progressWidth = 300;
        context.fillStyle = 'lightblue';
        context.fillRect(0, 0, progressWidth, 18);
        
        context.moveTo(0, 0);
        context.fillStyle = 'blue';

    
        const counterTemp = (300*counter)/10
        context.fillRect(0, 0, counterTemp, 18);
        
    
        
     }, [counter<=10?counter:null,charts]);



    return (
        <div className='w-full h-full bg-cover  m-0 overflow-y-clip'>
            <div className='w-full h-[700px]'>
                <div id="chartContainer" ></div>
                <canvas id="heat-map" className='w-full h-full '></canvas>
             
                <div className="controls sticky -bottom-10  flex items-center ml-10">
                    
                    <label htmlFor="strength" className='font-bold text-2xl text-slate-500'>Heat Strength</label>

                    <input type="range" id="strength" className='ml-8' name="strength" min="0" max="100"/>
                    <div className='mt-32 ml-60'>
                    <canvas id='progressBar' className=' '></canvas>
                    </div>
                    <div className={`botón ${playControl==1?'active':''}  hover:cursor-pointer`}  onClick={()=>{counter!=10?setPlayControl(!playControl):setCounter((counter)=>counter=0)}}>
                        <div className="fondo" x="0" y="0" width="200" height="200"></div>
                        <div className="icono flex items-center justify-center" width="200" height="200">
                            {
                            counter == 10?
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                                </svg>
                            :
                               <>
                                    <div className="parte izquierda" x="0" y="0" width="200" height="200" fill="#fff"></div>
                                    <div className="parte derecha" x="0" y="0" width="200" height="200" fill="#fff"></div>
                               </>
                            }
                           
                        </div>
                        {/* <div className="puntero"></div> */}
                    </div>
                    <div className="dropdown dropdown-right dropdown-end">
                <label tabIndex="0" className="btn m-1">Select Map Type</label>
                <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a onClick={()=>{setCharts(0)}}>Bubble Chart</a></li>
                    <li><a onClick={()=>{setCharts(1)}}>HeatMap</a></li>
                </ul>
            </div>
                            
                </div>
             
            </div>
           
        </div>
    );
}



export default Home;