import Controller from '@ember/controller';

export default Controller.extend({
  sameItems: true,

  actions: {
    onToggle(req) {
      req.set('required', !req.required);
    },
    createNewItem(type) {
      this.get('store').createRecord('requirement', {
        name: '',
        type,
        required: false,
      });
      this.set('sameItems', false);
    },
    saveItems() {
      const promises = [];
      const saves = this.get('store')
        .peekAll('requirement')
        .filterBy('isNew', true);

      saves.forEach(s => promises.push(s.save()));
      Promise.all(promises)
        .then(() => {
          if (promises.length) {
            alert(`"Saved" ${promises.length} new item${promises.length > 1 ? 's' : ''}! (see console)`);
          }
          this.set('sameItems', true);
        });
    }
  }
});
