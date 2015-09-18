describe('Contact', function() {
  it('creates a new contact with the given specifications', function() {
    var testContact = new Contact('Bruce', 'Lee');
    expect(testContact.firstName).to.equal('Bruce');
    expect(testContact.lastName).to.equal('Lee');
    expect(testContact.address).to.eql([]);
  });
});
