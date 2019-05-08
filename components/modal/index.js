Component({
  properties: {
    title: {
      type: String,
      value: "提示"
    },
    content: {
      type: String,
      value: ""
    }
  },
  methods: {
    makeCancel: function() {
      this.triggerEvent("cancel");
    }
  }
});
