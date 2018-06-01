describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');//esta sercion es igual  typo de dato de  ciphe rqu es un objeto.
  });

   describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });//assert.equal_(typeof cipher.encode,)

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => {
     const result = cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
     assert.equal(result, 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    });
    it('debería retornar "hijklmnopqrstuvwxyz" para "abcdefghyjklmnopqrstuvwxyz" con offest 33',()=>{
    const result = cipher.encode(33,'abcdefghijklmnopqrstuvwxyz');
    assert.equal(result,'hijklmnopqrstuvwxyzabcdefg');
    });
    it('debería retornar "h i" para "a b" con offest 33',()=>{
      const result = cipher.encode(33,'a b');
      assert.equal(result,'h i');
      });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      const result = cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG');
      assert.equal(result,'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', ()=> {
      const result = cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg");
      assert.equal(result,'abcdefghijklmnopqrstuvwxyz');
      });
      it('debería retornar " " para " " con offest 33',()=>{
        const result = cipher.decode(33,' ');
        assert.equal(result,' ');
        });
   });
    
  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',()=>{
      assert.equal(typeof cipher.createCipherWithOffset(),'object');
      assert.equal(typeof cipher.createCipherWithOffset().decode,'function');
      assert.equal(typeof cipher.createCipherWithOffset().encode,'function');
    });
    
    it('debería retornar "b" para "a" con offest 1', () => {
      assert.equal(cipher.createCipherWithOffset(1).encode('a'),'b');

    });
    it('debería retornar "a" para "b" con offest 1', () => {
      assert.equal(cipher.createCipherWithOffset(1).decode('b'),'a');

    });

  });

