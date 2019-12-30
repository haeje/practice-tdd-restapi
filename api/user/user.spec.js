const request = require('supertest');
const should = require('should');
const app = require('../../express');

//GET
describe('GET /users는 ', () =>{
    describe(' 성공 시 ', ()=>{
        it('user 정보를 담은 배열을 반환한다.', (done)=>{
            request(app)
                .get('/users')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Array);
                    done();
                });
        });
        it('최대 limit 개수 만큼 응답한다.', (done)=>{
            request(app)
                .get('/users?limit=2')
                .end( (err, res) =>{
                    res.body.should.have.length(2);
                    done();
                });
        });
    })

    describe('실패 시 ', ()=>{
        it('limit 이 숫자형이 아니면 400 응답한다.', done =>{
            request(app)
                .get('/users?limit=a')
                .expect(400)
                .end(done)
                
        })
    })
})

// DELETE
// 성공 시 204 status 반환한다.
// 실패 시 
// id가 숫자일 경우 400 반환한다.
describe('DELETE /users/:id ', () =>{
    describe('성공 시 ', ()=>{
        it(' 204 status 코드를 반환한다.', done=>{
            request(app)
                .delete('/users/1')
                .expect(204)
                .end(done);
        });
    })
    describe('실패 시 ', ()=>{
        it( 'id가 숫자가 아닌 경우 400 status 반환한다.', done=>{
            request(app)
                .delete('/users/two')
                .expect(400)
                .end(done)
        })
    })
})