{
    apps: [
        {
            name: "start",
            script: "bin/www",
        }
    ],
    deploy: {
        stagging: {
            user: "pi",
            host: "pilabs.local",
            ref: "origin/master",
            repo: "https://github.com/evilqubit/start.git",
            path: "~/www/stagging",
            "post-deploy": "npm run deploy; export NODE_PORT=3000; pm2 startOrRestart ecosystem.json"
        }
    }
}
