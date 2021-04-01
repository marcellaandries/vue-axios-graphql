import axios from 'axios';

const emosGraphqlApi = axios.create({
    baseURL:'https://api.spacex.land/graphql'
});

export default emosGraphqlApi;