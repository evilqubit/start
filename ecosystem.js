{
    apps: [
        {
            name: "start",
            script: "bin/www",
        }
    ],
    deploy: {
        stagging: {
            user: "catchcam",
            host: "162.243.187.148",
            ref: "origin/master",
            repo: "https://github.com/evilqubit/start.git",
            path: "~/www/stagging",
            "post-deploy": "npm run deploy; export NODE_PORT=8000; pm2 startOrRestart ecosystem.json"
        }
    }
}
