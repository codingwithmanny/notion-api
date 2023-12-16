// Imports
// ========================================================
import { config } from 'dotenv';
import { Client } from '@notionhq/client';

// Config
// ========================================================
config();
console.log(`${process.env.NOTION_API_KEY}`);
// EXAMPLE:
// 1. Go to page and click database 'Copy link to view'
// https://www.notion.so/Manny-Test-Database-Page-4229299d7e9c44a1a8dd3e23584ec475
// 2. Page that link here or a url and get the value
// https://www.notion.so/9534a55cb655496d8803ee7402fb8113?v=b06629cb955b45acb17ff3cadca328fa&pvs=4
const DATABASE_ID='9534a55cb655496d8803ee7402fb8113';

// Init
// ========================================================
(async () => {
    console.group('init');

    try {
        const client = new Client({ auth: `${process.env.NOTION_API_KEY}`, notionVersion: '2021-08-16' });
        const pages = await client.databases.query({
            database_id: DATABASE_ID,
            // filter: {
            //     property: "Status",
            //     status: {
            //         equals: "Ready"
            //     }
            // }
        });
        console.log({ pages });
        console.log({ results: pages.results });

        // // const result = pages.results[0];
        // const date = new Date().getTime();
        // // const scheduled = (pages.results[0] as any)?.properties?.Schedule?.date?.start;
        // const scheduledDate = new Date((pages.results[0] as any)?.properties?.Schedule?.date?.start).getTime();
        // console.log({ date });
        // console.log({ scheduledDate });
        // // console.log({ properties: scheduled });
        // const properties = (pages.results[0] as any)?.properties;
        // console.log({ properties });
        // const mediaFiles = properties?.Media?.files
        // console.log({ mediaFiles })
        // const fileName = properties?.Media?.files?.[0]?.name;
        // const file = properties?.Media?.files?.[0]?.file;
        // console.log({ file });

        // await download(file.url, 'dist', { filename: fileName });

        // // Get all 'Not Started'
        // const statusNotStartedIds = pages.results?.filter((page) => 
        //     (page as any)?.properties?.Status?.status?.name === 'Not started'
        // ).map((page) => page.id);
        // console.log({ statusNotStartedIds });

        // const statusReadyIds = pages.results?.filter((page) => 
        //     (page as any)?.properties?.Status?.status?.name === 'Ready'
        // ).map((page) => ({ id: page.id, schedule: (page as any)?.properties?.Schedule?.date?.start, caption: (page as any)?.properties?.Captions?.rich_text }));
        // console.log({ statusReadyIds: statusReadyIds?.[0]?.caption });


        // console.log({ date: new Date().toLocaleString('en-US', { timeZone: '-5'}) });
        // const page = await client.pages.retrieve({
        //     page_id: result.results[0]?.id
        // })

    
        // console.log({ page: (result.results[0] as any)?.properties?.Status });
        // console.log({ Status: (page as any)?.properties?.Status })
        // --------- UPDATE
        // const update = await client.pages.update({
        //     page_id: result?.id,
        //     properties: {
        //         Status: {
        //             status: {
        //                 name: 'Done',
        //                 color: 'green'
        //             }
        //             // status: {
        //             //     name: 'Not started',
        //             //     color: 'default'
        //             // }
        //         },
        //         Link: {
        //             url: "http://hello.com"
        //         }
        //     }
        // });
        // console.log({ update });
    } catch (error) {
        console.log({ error });
    }
    console.groupEnd();
})();