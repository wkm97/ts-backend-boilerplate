import { Result } from '@shared/core/Result';

describe('Unit Test for Result', () => {
  test('Success Case for Result', () => {
    const result = Result.ok(123);
    expect(result.isSuccess()).toEqual(true);
    expect(result.isFailure()).toEqual(false);
    expect(result.getValue()).toEqual(123);
    expect(() => result.getErrorValue()).toThrowError(
      new Error("Can't get the error of an success result. Use 'getValue' instead.")
    );
  });

  test('Success Case onSuccess function for Result', () => {
    const firstNumber = Result.ok(100);
    const secondNumber = Result.ok(100);
    firstNumber.onSuccess(firstNum => {
      secondNumber.onSuccess(secondNum => {
        const newNum = firstNum + secondNum;
        expect(newNum).toEqual(200);
      });
    });
  });

  test('Failure Case for Result', () => {
    const result = Result.failure(new Error('Any Failure'));
    expect(result.isSuccess()).toEqual(false);
    expect(result.isFailure()).toEqual(true);
    expect(() => result.getValue()).toThrowError(
      new Error("Can't get the value of an failure result. Use 'getErrorValue' instead.")
    );
    expect(result.getErrorValue()).toEqual(new Error('Any Failure'));
  });

  test('Failure Case onFailure function for Result', () => {
    function getNumber(success: boolean) {
      if (success) {
        return Result.ok(100);
      }
      return Result.failure(new Error('No number.'));
    }

    const firstNumber = Result.ok(100);
    const secondNumber = getNumber(false);
    const result = firstNumber.onSuccess(firstNum => {
      secondNumber.onSuccess(secondNum => {
        const newNum = firstNum + Number(secondNum);
        expect(newNum).toEqual(200);
      });
    });

    result.onFailure(err => {
      expect(err).toEqual(new Error('No number.'));
    });
  });
});
