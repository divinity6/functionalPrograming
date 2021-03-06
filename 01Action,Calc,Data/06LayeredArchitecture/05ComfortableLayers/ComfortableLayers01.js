/**
 * 프로그람 설명문서 주석
 * 2022.06. 05
 *
 *
 *           ===== 편리한 계층( comfortable layers ) =====
 *
 *      - 추상화의 벽을 높게 맨드는 것은 어렵다
 *        ( 오히려 도움이 되지 않는다고 느낄때도 있다 )
 *
 *      - 편리한 계층은 지금 금작업하는 코드가 편리하다고 느끼면 설계는 잠시 멈춰도 된다
 *
 *      --> 호출 화살표가 다른 계층과 섞이더라도 그대로 두어도 된다
 *          단, 구체적인 것을 너무많이 알아야 하거나, 코드가 너무 지저분해지면
 *          다시 패턴을 적용하면 된다
 *          ( 어떤 코드도 이상적인 모습에 도달할 수 없다 )
 *
 *      --> 언제나 설계와 새로운 기능의 필요성 사이에 머물게 된다
 */
/**
 *           ===== 호출 그래프 =====
 *
 *      - 호출 그래프는 세가지 중요한 비기능적인 요구사항을 보여준다
 *
 *      --> 기능적 요구사항( functional requirements )은 소프트웨어가
 *          정확히 해야하는 일을 말한다
 *
 *      --> 비기능적 요구사항( nonfunctional requirements, NFRs )은
 *          테스트를 어떻게 할 것인지, 재사용을 잘할수 있는지, 유지보수하기
 *          어렵지 않은지같은 요구사항들.
 *
 *      1. 유지보수성( maintainability )
 *      --> 요구사항이 바뀌었을 경우 가장 쉽게 고칠 수 있는 코드는 어떤 코드인가?
 *
 *      2. 테스트성( testability )
 *      --> 어떤 것을 테스트하는 것이 가장 중요한가?
 *
 *      3. 재사용성( reusability )
 *      --> 어떤 함수가 재사용하기 좋은가?
 *
 *      - 호출 그래프에 함수 이름을 빼고 보면, 코드 위치를 통해 비기능적 요구사항에 답할 수 있다
 *
 */

/**
 *          ===== 유지보수성( maintainability ) =====
 *
 *      @규칙 : 위로 연결된 것이 적은 함수가 바꾸기 쉽다
 *             ( 자주 바뀌는 코드는 가능한 위에 있어야 한다 )
 *
 *      - 가장 높은 곳에 있는 코드가 고치기 쉽다
 *      --> 비즈니스 규칙처럼 자주 바뀌는 요구사항 코드들
 *
 *      - 반대로 낮은 곳에 있는 코드 일수록 호출하는 곳이 많아 고치기 어렵다
 *
 *      --> 즉, 호출 그래프에서 멀리 떨어져있을수록 고치기 어렵다
 *          ( 자주 바뀌는 코드들은 그래프 위에 있을수록 쉽게 일할 수 있다 )
 */

/**
 *          ===== 테스트성( testability ) =====
 *
 *      @규칙 : 위쪽으로 많이 연결된 함수를 테스트하는 것이 더 가치있다
 *             ( 아래쪽에 있는 함수를 테스트하는 것이 위쪽 함수를 테스트하는 것보다 가치있다 )
 *
 *      - 모든 코드를 테스트하는 것은 현실적이지 않다
 *      --> 높은 곳에 있는 함수들은 자주 바뀌기 때문에 테스트도 오래가지 않는다
 *      --> 따라서, 가장 아래에 있는 코드들을 테스트할수록 얻을 수 있는 것이 많다
 *
 *      ----> 패턴을 사용하면, 테스트 가능성에 맞춰 코드를 계층화 할 수 있다.
 *            하위 계층으로 코드를 추출하거나, 상위 계층에 함수를 맨드는 일은
 *            테스트의 가치를 결정한다
 */

/**
 *          ===== 재사용성( reusability ) =====
 *
 *      @규칙 : 아래쪽에 함수가 적을수록 더 재사용하기 좋다
 *             ( 낮은 수준의 단계로 함수를 빼내면 재사용성이 더 높아진다 )
 *
 *      - 코드를 재사용하면, 여러 번 고치거나, 테스트하지 않아도 된다
 *        ( 시간과 비용을 줄일 수 있다 )
 *
 *      --> 낮은 계층으로 함수를 추출하면 재사용성이 높아진다
 *          ( 아래쪽을 가르키는 화살표가 많은 함수는 재사용하기 어렵다 )
 */
title( '편리한 계층' );
{
}

/**
 *           ===== 정리 =====
 *
 *      - 계층형 설계는 바로 아래계층에 있는 함수로 현재 계층의 함수를 구현해 코드를
 *        구성하는 기술이다
 *
 *      - 추상화의 벽 패턴을 사용하면 세부적인 것을 완전히 감출 수 있어서,
 *        더 높은 차원에서 생각할 수 있다
 *
 *      - 작은 인터페이스 패턴을 사용하면 완성된 인터페이스에 가깝게 계층을 맨들 수 있다
 *
 *      - 편리한 계층 패턴을 이용하면 다른 다른 패턴을 요구사항에 맞게 사용할 수 있다
 *        ( 패턴들은 요구사항에 맞게 적용해야 한다 )
 *
 *      - 호출 그래프 구조에서 규칙을 얻을 수 있다
 *      --> 이 규칙으로 테스트성, 유지보수성, 재사용성 하기 좋은 코드들이 어디있는지 찾을 수 있다
 */