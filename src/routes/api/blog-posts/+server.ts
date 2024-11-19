import {json, type RequestHandler} from "@sveltejs/kit";
import { neon } from "@neondatabase/serverless";

const sql = neon(
    "postgresql://neondb_owner:1mHvwMNR2KJS@ep-broad-surf-a1mc50uh.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
);

//@ts-ignore
export const GET: RequestHandler = async ({request}) => {
    const query = await sql`select * from posts`;
    if (query){
        return json({status: 200, data: query})
    } else {
        return json({status: 500, message: "Query not successful."})
    }
}