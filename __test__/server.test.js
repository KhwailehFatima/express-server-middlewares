'use strict'

const supertest = require('supertest');
const server= require('../server');

const request = supertest(server.app);

describe('API server', ()=>{
    it( 'should respond with 404 on an invalid route', async () => {
        const response = await request.get( '/foo' );
        expect( response.status ).toBe( 404 );
    } );
    it ('Home page works', async ()=>{
        const res = await request.get('/'); // calling the homepage route
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World');
    });

    it ('Square page works', async ()=>{
        const res= await request.get('/square?num=10'); // calling the square route
        expect(res.status).toEqual(200);
        expect (res.text).toEqual('the square of 10 is 100');
    });
    // it ('square page failed with invalid number', ()=>{
    //     const res = await request.get( '/square?num=foo' );
    //             expect(res.status).toEqual(500);
    //     expect( res.text ).toEqual( '{\"code\":500,\"message\":\"Server Error: Invalid Number\"}' );
    // });

})