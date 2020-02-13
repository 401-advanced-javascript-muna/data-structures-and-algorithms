'use strict ';

const MultiBracketValidat = require('./multi-bracket-validation');

describe(' MultiBracketValidati ()' , () =>
{
  it('{} return true' , () =>
  {
    let input = '{}';

    expect(new MultiBracketValidat(input).multiBracketValidation(input)).toBeTruthy();
  });

  it('{}(){} return true' , () =>
  {
    let input = '{}(){}';

    expect(new MultiBracketValidat(input).multiBracketValidation(input)).toBeTruthy();
  });

  it('()[[Extra Characters]] return true' , () =>
  {
    let input = '()[[Extra Characters]]';

    expect(new MultiBracketValidat(input).multiBracketValidation(input)).toBeTruthy();
  });

  it('(){}[[]] return true' , () =>
  {
    let input = '(){}[[]]';

    expect(new MultiBracketValidat(input).multiBracketValidation(input)).toBeTruthy();
  });

  it('{}{Code}[Fellows](()) return true' , () =>
  {
    let input = '{}{Code}[Fellows](())';

    expect(new MultiBracketValidat(input).multiBracketValidation(input)).toBeTruthy();
  });

  it('[({}] return false' , () =>
  {
    let input = '[({}]';

    expect(new MultiBracketValidat(input).multiBracketValidation(input)).toBeFalsy();
  });

  it('(](	 return false' , () =>
  {
    let input = '(](';

    expect(new MultiBracketValidat(input).multiBracketValidation(input)).toBeFalsy();
  });

  it('{(}) return true' , () =>
  {
    let input = '{(})';

    expect(new MultiBracketValidat(input).multiBracketValidation(input)).toBeTruthy();
  });
});