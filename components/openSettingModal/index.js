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
    openSetting: function() {
      this.triggerEvent("openSetting");
    },
    cancel: function() {
      this.triggerEvent("cancel");
    }
  }
});
