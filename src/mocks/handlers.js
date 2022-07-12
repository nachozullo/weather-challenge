import { rest } from 'msw';
import { mockOneCallResponse, mockWeatherResponse } from './mockData';

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/weather`, (req, res, ctx) => {
    return res(ctx.json(mockWeatherResponse));
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/onecall`, (req, res, ctx) => {
    return res(ctx.json(mockOneCallResponse));
  }),
];
