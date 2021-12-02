var Mock = require('mockjs')
var Random = Mock.Random
export default function handler(req: any, res: any) {
    var data = Mock.mock({
        'homeNav': [
            {
                "display": "Trang chủ",
                "path": "/"
            },
            {
                "display": "Sản phẩm",
                "path": "/catalog"
            },
            {
                "display": "Phụ kiện",
                "path": "/accessories"
            },
            {
                "display": "Liên hệ",
                "path": "/contact"
            }
        ]
    })

    if (req.method === 'GET') {
        res.status(200).json(data.homeNav)
    } else {
        // Handle any other HTTP method
    }
}