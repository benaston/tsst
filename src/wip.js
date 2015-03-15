<!DOCTYPE html>
<html>
<script>

(function(testRunner) {

    var describe = testRunner.describe,
        it = testRunner.it,
        expect = testRunner.expect;

    describe('Player', function() {

        describe('foo', function() {

            it('should return true', function() {

                //arrange
                var player, result;

                player = {
                    foo: function() {
                        return false;
                    }
                }

                //act
                result = player.foo();

                //assert
                expect(result).toBe(true);

            });

            describe('bar', function() {

                it('should call the foo', function() {

                    //arrange
                    var player, result;

                    player = {
                        bar: function() {
                            return false;
                        }
                    }

                    //act
                    result = player.bar();

                    //assert
                    expect(result).toBe(false);

                });

                it('should call the foo', function() {

                    //assert
                    expect(false).toBe(false);

                });

                describe('bam', function() {

                    it('should do some magic', function() {

                        //arrange
                        var player, result;

                        player = {
                            bam: function() {
                                return false;
                            }
                        }

                        //act
                        result = player.bam();

                        //assert
                        expect(result).toBe(false);

                    });

                });

                it('should call the foo', function() {

                    //assert
                    expect(false).toBe(false);

                });

            });

        });

    });

}(testRunner));

</script>

<body>
    foo
</body>

</html>
