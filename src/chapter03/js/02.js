document.getElementById('input').addEventListener('keyup', function (e) {
  obj.value = e.target.value;
})

let valueDom = document.getElementById('bind');

var obj = {}
Object.defineProperties(obj, {
  value: {
    get: function () {
      return document.getElementById("input").value
    },
    set: function (newValue) {
      console.log(newValue)
      valueDom.innerHTML = newValue
    }
  }
})

/* Object.defineProperty(obj, 'value', {
  get: function () {
    return document.getElementById("input").value
  },
  set: function (newValue) {
    console.log(newValue)
    document.getElementById('bind').innerHTML = newValue
  }
}) */