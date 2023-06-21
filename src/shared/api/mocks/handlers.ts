import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/users',
    (request, response, context) => {
      return response(
        context.status(200),
        context.json([
          {
            name: 'Foo',
          },
          {
            name: 'Bar',
          },
          {
            name: 'Baz',
          },
        ])
      );
    }
  ),
];
