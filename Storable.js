class Storable {
  constructor(key, props) {
    this.all = [];
    this.key = key;
    this.props = props.split(",");
    this.all = JSON.parse(localStorage.getItem(key)) || [];
  }

  save() {
    localStorage.setItem(this.key, JSON.stringify(this.all));
  }

  add(...values) {
    this.all = [
      ...this.all,
      this.props.reduce(
        (options, prop, i) => ({ ...options, [prop]: values[i] }),
        {}
      ),
    ];

    this.save();
  }

  remove(value, key = "id") {
    this.all = this.all.filter((storable) => storable[key] !== value);
    this.save();
  }
}

module.exports = Storable;
