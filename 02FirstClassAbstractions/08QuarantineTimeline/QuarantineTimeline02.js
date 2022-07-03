/**
 * 프로그람 설명문서 주석
 * 2022.07. 03
 *
 *
 *           ===== 타임라인 그리기 =====
 *
 *      - ++ 와 += 는 세 단계로 연산을 한다
 *
 *      --> 예)
 *              total++;
 *
 *              var temp = total; // 읽기
 *              temp = temp + 1;  // 수정
 *              total = temp;     // 쓰기
 *
 *      ----> 위의 행동에서 total 값이 전역변수라면 첫 단계와 세 단계는 액션이된다
 *            두 번째 단계인 수정은 계산이 된다.
 *            ( 따라서 , 두개의 액션이 타임라인에 추가 된다 )
 *
 *
 *      - 인자는 함수를 부르기 전에 실행한다
 *
 *      --> 만약 인자를 전달하면서 실행한다면, 인자는 함수에 전달되기 전에 실행된다
 *
 *      - 타임라인 다이어그램은 세 단계로 그릴 수 있다
 *
 *      1. 액션을 확인한다
 *
 *      2. 순서대로 실행되거나 동시에 실행되는 액션을 그린다
 *
 *      3. 플랫폼에 특화된 지식을 사용해 다이어그램을 단순하게 맨든다
 *
 */

/**
 *           ===== 비동기 호출은 새로운 타임라인으로 그린다 =====
 *
 *      - 다음은 사용자와 문서를 저장하는 고정에서 로딩 상태를 보여주는 코드
 */

title( '로딩 상태를 보여주는 코드' );
{
    try{
        // 서버에 사용자를 저장한다( ajax )
        saveUserAjax( user , function(){
            setUserLoadingDOM( false ); // 사용자 로딩 표시를 감춘다
        } );

        setUserLoadingDOM( true ); // 사용자 로딩 표시를 보여준다

        // 서버에 문서를 저장한다
        saveDocumentAjax( document , function(){
            setDocLoadingDOM( false ); // 문서 로딩 표시를 감춘다
        } );

        setDocLoadingDOM( true ); // 문서 로딩 표시를 보여준다

    }
    catch( e ){
        console.log( '테스트용 코드입니다' );
    }
}

/**
 *          ===== 서로 다른 언어, 서로 다른 스레드 모델 =====
 *
 *      - JS 는 단일 스레드, 비동기 모델을 사용한다
 *
 *      @단일스레드 : 동기
 *
 *      --> 기본적으로 멜티 스레드를 지원하지 않는 언어도 있다
 *          예) PHP 는 기본적으로 멀티스레드를 사용할 수 없다
 *             ( 모든 것이 순서대로 실행되고 입출력을 사용하면 끝날때까지 기다려야 한다 )
 *
 *      --> 이런 제약은 시스템이 단순해진다는 장점이 있다
 *          ( 스레드가 하나면 타임라인도 하나지만, 네트워크를 통한 API 호출 같은 것은
 *            다른 타임라인이 필요하다 )
 *
 *      ----> 하지만 메모리를 공유하지 않기 때문에 공유 자원을 많이 없앨 수 있다
 *
 *      @단일스레드 : 비동기
 *
 *      --> JS 는 스레드가 하나이다. 입출력 작업을 하려면 비동기 모델을 사용해야 한다
 *
 *      ----> 입출력의 결과는 콜백으로 받을 수 있지만, 언제끝날지 알 수 없기 때문에
 *            다른 타임라인에 표현해야 한다
 *
 *     @멀티스레드
 *
 *     --> 자바, 파이썬, 루비 , C , C# 같은 언어가 멀티스레드를 지원한다
 *
 *     ----> 멀티스레드는 실행 순서를 보장하지 않기 때문에 프로그라밍이 매우 어렵다
 *
 *     ----> 새로운 스레드가 생기면 새로운 타임라인을 그려야 한다
 *
 *     @메시지패싱 : message-passing 프로세스
 *
 *     --> 엘릭서나 얼랭 같은 언어는 서로 다른 프로세스를 동시에 실행할 수 있는
 *         스레드 모델을 지원한다
 *
 *     ----> 프로세스는 서로 메모리를 공유하지 않고 메시지로 통신한다
 *
 *     ----> 서로 다른 타임라인에 있는 액션은 순서가 섞이지만, 메모리를 공유하지
 *           않기 때문에 가능한 실행 순서가 많아도 문제되지 않는다
 */

/**
 *          ===== 순서대로 실행되는 코드도 두 종류가 있다 =====
 *
 *      - 코드는 두가지 형태로 실행될 수 있다
 *
 *      --> 일반적으로는 순서대로 실행되는 두 액션 사이에 다른 타임라인에 있는
 *          액션이 끼어들 수 있다
 *          ( but , 자바스크립트 스레드 모델에서 동기화된 액션 사이에는 다른 액션이
 *            끼어들 수 없다 )
 *
 *      - 순서대로 실행되지만 순서가 섞일수 있는 코드, 그렇지 않은 코드
 *
 *      1. 순서가 섞일 수 있는 코드
 *
 *      --> 두 액션 사이에 시간은 얼마나 걸릴지 알 수 없다
 *
 *      --> 액션을 박스로 표현하고, 액션 사이에 걸리는 시간을 선으로 표시
 *          ( 걸리는 시간에 따라 선을 길게, 짧게 그릴 수 있다 )
 *
 *      2. 순서가 섞이지 않는 코드
 *
 *      --> 두 액션이 차례로 실행되는데, 그사이에 다른 작업이 끼어들지 못한다
 *
 *      ----> 런타임이 원래 해주거나, 프로그라밍을 잘해서 맨들 수 있다
 *
 *      ----> 이런 경우에는 액션을 같은 상자에 그린다.
 *
 *      - 박스가 작을수록 더 좋은 코드가 된다.
 */

/**
 *          ===== 순서를 예측할 수 없다 =====
 *
 *      - 타임라인 다이어그램에서 서로다른 타임라인에 있는 박스들은 모두
 *        실행 가능한 순서( possible ordering ) 문제가 발생할 수
 *        있기 때문에 항상 예상할 수 있어야 한다
 *
 *      --> 실행 가능한 순서는 사용하는 플랫폼에서 지원하는 스레드모델마다 다르다
 */