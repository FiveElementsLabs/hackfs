contract Test {
    function test() public {
        uint256 a = 1;
        uint256 b = 2;
        uint256 c = a + b;
        assert(c == 3);
    }
}
