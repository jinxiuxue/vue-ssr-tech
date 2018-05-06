import '../style/footer.less'
//使用jsx可以直接用js来操作 缺点是样式需要单独引入 。vue文件 结构更清晰 用起来更方便
export default {
    data(){
        return {
            author: "King~"
        }
    },
    render(){
        return (
            <div id="footer">
                Written by {this.author}
            </div>
        )
    }
}