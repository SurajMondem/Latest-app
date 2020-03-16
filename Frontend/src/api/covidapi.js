import axios from 'axios';

export default axios.create({
    baseURL: `https://coronavirus.m.pipedream.net/csse_covid_19_data/csse_covid_19_daily_reports`,
})

