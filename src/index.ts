import FindMyWay from '../index';

const router = FindMyWay({
  defaultRoute: (req, res) => {
    res.statusCode = 404;
    res.end(`Unknown path: ${req.url}`);
  },
  onBadUrl: (path, _, res) => {
    res.statusCode = 404;
    res.end(`Bad path: ${path}`);
  },
});

router.on('GET', '/:id', (req, res, params) => {
  console.log(req, res, params);
});

function run(req: any, res: any) {
  router.lookup(req, res);
}

// unknown path
run(
  { method: 'GET', url: '/saehun/hi', headers: {} },
  { end: (data: any) => console.log('end', data), statusCode: 200 }
);

// bad url
run({ method: 'GET', url: '/%world', headers: {} }, { end: (data: any) => console.log('end', data), statusCode: 200 });

// valid path
run({ method: 'GET', url: '/saehun', headers: {} }, { end: (data: any) => console.log('end', data), statusCode: 200 });
