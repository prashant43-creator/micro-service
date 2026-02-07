import concurrently from "concurrently";
import servers from "./servers.json";
import path from "path";
const root = process.cwd();

const config = servers.map((item)=>({
    name: item,
    command : `rm -rf "${path.join(root,"services",item)}`
}))

concurrently(config)