describe('TDD', () => {
  it('매처함수 일괄 테스트', () => {
    const a = true
    const b = {foo: false, bar: undefined}
    const foo = 'foo'
    const bar = 'foo'
    const msg = 'aabar_quuu'
    const pi = 3.14
    const e = 3.1
    expect(a).toBe(true) // true와 같은지 검사
    expect('green').toBe('green', 'blue') // 입력 값 green과 일치하는 기대 값이 있는지 검사
    expect(false).not.toBe(true) // true와 같지 않은지 검사
    expect(foo).toEqual(bar) // foo 변수와 bar 변수가 같은지 검사
    expect(msg).toMatch(/bar/) // bar라는 단어가 message 변수에 포함돼 있는지 검사
    expect(msg).not.toMatch(/quux/) // quux라는 단어가 message 변수에 포함돼 있지 않은지 검사
    expect(b.foo).toBeDefined() // a 변수에 foo라는 변수가 정의돼 있는지 검사
    expect(b.bar).not.toBeDefined() // a 변수에 bar라는 변수가 정의돼 있지 않은지 검사
    expect(null).toBeNull() // null 인지 검사
    expect(foo).not.toBeNull() // foo변수가 null이 아닌지 검사
    expect(foo).toBeTruthy() // 변수 foo가 true인지에 대한 검사
    expect(msg).toContain('bar') // 배열 변수 a에 'bar'라는 요소가 포함돼 있는지 검사
    expect(msg).not.toContain('quux') // 배열 변수 a에 'quux'라는 요소가 포함돼있지 않은지 검사
    expect(pi).toBeGreaterThan(e) // pi 변수의 값이 e 변수의 값보다 큰지 검사
    expect(e).not.toBeGreaterThan(pi) // e변수의 값이 pi 변수보다 크지 않은지 검사
  })
})
