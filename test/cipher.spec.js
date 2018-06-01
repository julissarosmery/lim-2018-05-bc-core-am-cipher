describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');//esta sercion es igual  typo de dato de  ciphe rqu es un objeto.
  });

   describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });//assert.equal_(typeof cipher.encode,)

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => {
     const result = cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ',33);
     assert.equal(result, 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    });
    it('debería retornar "hijklmnopqrstuvwxyz" para "abcdefghyjklmnopqrstuvwxyz" con offest 33',()=>{
    const result = cipher.encode('abcdefghijklmnopqrstuvwxyz',33);
    assert.equal(result,'hijklmnopqrstuvwxyzabcdefg');
    });
    it('debería retornar " " para " " con offest 33',()=>{
      const result = cipher.encode(' ',33);
      assert.equal(result,' ');
      });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      const result = cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG',33);
      assert.equal(result,'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', ()=> {
      const result = cipher.decode("hijklmnopqrstuvwxyzabcdefg",33);
      assert.equal(result,'abcdefghijklmnopqrstuvwxyz');
      });
      it('debería retornar " " para " " con offest 33',()=>{
        const result = cipher.decode(' ',33);
        assert.equal(result,' ');
        });
   });
    
  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');
  });
