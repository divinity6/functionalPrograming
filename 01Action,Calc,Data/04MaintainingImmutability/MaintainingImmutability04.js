/**
 * 프로그람 설명문서 주석
 * 2022.05. 28
 *
 *
 *           ===== 시간에 따라 변하는 상태 =====
 *
 *      - 전역변수는 값을 가공해서 새로할당해야 한다
 *      --> 새로운 값으로 교체( swapping )되어야
 *          업데이트됨
 *
 *      ----> 예 ) shopping_cart
 *
 *      - 일반적으로 불변 데이터 구조는 변경 가능한 구조보다
 *        메모리를 더 많이쓰고 느리다
 *
 *      --> 그러나 충분히 빠름( 아래의 이유로 )
 *
 *      1. 언제든 최적화할 수 있다.
 *
 *      2. 가비지 콜렉터는 매우 빠르다
 *
 *      3. 생각보다 많이 복사하지 않는다
 *      --> 데이터 구조의 최상위 단계만 복사( 얕은 복사 swallow copy )
 *
 *      4. 함수형 프로그래밍 언어에는 빠른 구현체가 있다
 *      --> 데이터 구조를 복사할때 최대한 많은 구조를 공유
 *          ( 더 적은 메모리를 사용하고 가비지 콜렉터의 부담을 줄여줌 )
 */

/**
 *           ===== 객체에 대한 카피-온-라이트 =====
 *
 *      - 깊은 복사가 아닌 얕은 복사를 사용하면 최상위 데이터만 복사함
 *
 *      - 구조적 공유( structural sharing )이라고도 하는데,
 *        따라서 메모리를 적게 사용하고, 깊은 복사보다 빠르다
 *
 *      --> 얕은 복사를 사용해야하는 이유가 있엇네
 *
 *      --> 그런데 또 읽으니 중첩된 모든 데이터 구조가 바뀌지 않아야 한다고 하네...
 *
 */

title( '불변성으로 객체 맨들기' );
{
    function objectSet( object , key , value ){
        return Object.assign( {} , object )[ key ] = value;
    }

    function setPrice( item , new_price ){
        return objectSet( item , "price" , new_price );
    }

    function setQuantity( item , new_quantity ){
        return objectSet( item , "quantity" , new_quantity );
    }

    function objectDelete( object , key ){
        var _object = Object.assign( {} , object );
        delete _object[ key ];
        return _object;
    }
}