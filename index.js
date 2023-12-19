import fetch from 'node-fetch';

const handler = async (event) => {
    const { buyer_id, start_date, end_date, near } = event;

    // hotel's booking process
    const response = await fetch(
        `${process.env.WEBSERVICE_URL}/Prod/hotel`,
        {
            method: 'POST',
            body: JSON.stringify({
                buyer_id: buyer_id,
                start_date: start_date,
                end_date: end_date,
                near: near,
            }),
        },
    );

    const data = await response.json();
    return data;
};

export { handler };