function testMocha() {
  return "It's alive!!!"
}

exports._test = {
  testMocha: testMocha
}

/*
  exports._test is being used to 'export' each of the functions w/in an object
  In test.js, you can see that the assert.equal argument includes
    assert.equal(students._test.eatsDoritos(), "Chips")
    1) students - the var created in test.js, which stores the students.js file
    2) _test - the name of the object which will contain all of the methods
    3) eatsDoritos() -  the function w/in _test, with its name as a key and signature as a value
*/
