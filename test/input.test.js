import Button from "../src/button"

const expect = chai.expect
import Vue from "vue"
import Input from "../src/input"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Input", () => {
  it("存在.", () => {
    expect(Input).to.exist
  })
  describe("props", () => {
    it("接受 value", () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          value: "1234"
        }
      }).$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement.value).to.equal("1234")
      vm.$destroy()
    })
    it("接受 disabled", () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          disable: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement.disabled).to.equal(true)
      vm.$destroy()
    })
    it("接受 readonly", () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          readOnly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement.readOnly).to.equal(true)
      vm.$destroy()
    })
    it("接受 error", () => {
      const Constructor = Vue.extend(Input)
      const vm = new Constructor({
        propsData: {
          error: "错了"
        }
      }).$mount()
      const useElement = vm.$el.querySelector("use")
      expect(useElement.getAttribute("xlink:href")).to.equal("#icon-error")
      const errorMessage = vm.$el.querySelector(".errorMessage")
      expect(errorMessage.innerText).to.equal("错了")
      vm.$destroy()
    })

    describe("事件", () => {
      it("支持 change 事件", () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on('change',callback)
        let event = new Event('change')
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
        vm.$destroy()
      })
      it("支持 input 事件", () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on('input',callback)
        let event = new Event('input')
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
        vm.$destroy()
      })
      it("支持 focus 事件", () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on('focus',callback)
        let event = new Event('focus')
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
        vm.$destroy()
      })
      it("支持 blur 事件", () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on('blur',callback)
        let event = new Event('blur')
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
        vm.$destroy()
      })
    })

  })

})