describe('numerical operation test', () => {
       test('assumeing  a+b should be eqaul to b+a ', () => {
              let a=5;
              let b=10;
              expect(a+b).toBe((a+b));
            })
            test('assumeing  a+b should be eqaul to b-a ', () => {
              let a=5;
              let b=10;
              expect(a+b).not.toBe((b-a));
            })
            
})


