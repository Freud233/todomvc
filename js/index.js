new Vue({
	el: ".todoapp",
	data: {
		msg: "请输入你的任务清单",
		inpval: '',
    count: 1,
    noDoneNum: '',
    keyword: '',
    active: 'active',
    all: 'all',
    completed: 'completed',
    activeArr : [],
		list: [{
			id: 1,
			task: "守望先锋",
      status: true,
      dbclick: false      
		}],
	},
	methods: {
		addTask() {
			this.list.push({
				id: ++this.count,
				task: this.inpval,
        status: false,
        dbclick: false      
      })
      this.inpval = ''
      this.noDone()
		},
		delTask(id) {
			let index = this.list.findIndex(item => {
				if (item.id == id) {
					return true
				}
			})
			this.list.splice(index, 1)
		},
		noDone() {
			let noDoneNum = this.list.filter(item => {
				return item.status == false
			})
      this.noDoneNum = noDoneNum.length
    },
    getfilter(kw){
      console.log(kw);
      if(kw == 'active'){
         this.activeArr = this.list.filter(item => {
          return  item.status == false     
        })
      } else if (kw == 'completed'){
        this.activeArr = this.list.filter(item => {
          return item.status == true
        })
      } else {
        this.activeArr = this.list
      }
      console.log(this.activeArr);   
    },
    clearAllcom(){
      this.list.forEach((item, index) => {
        if(item.status == true){
          this.list.splice(index, 1)
        }
      })
    }
	},
	mounted() {
    this.getfilter()
    this.noDone()
  },
  beforeUpdate() {
    this.noDone()
  },
})
