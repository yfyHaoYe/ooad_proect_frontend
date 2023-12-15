// import dataService from "@/service/dataService";

const state = () => ({
    newRecord: {
        start: "",
        end: "",
        plan: "校巴"
    },

})

const actions = {

    // loginCheck(context) {
    //     dataService.loginCheck(context.state.form, resp => {
    //         if (resp.data.code === 0) {
    //             context.commit("changeAccountStatus", true)
    //         }
    //     })
    // },
    //
    // registerAccount(context) {
    //     console.log(context.state.form)
    //     dataService.registerAccount({
    //         "username": context.state.form.username,
    //         "password": context.state.form.password,
    //         "confirmPassword": context.state.form.confirmPassword,
    //     }, resp => {
    //         console.log(resp)
    //         if (resp.data.code === 0) {
    //             context.commit("changeAccountStatus", true)
    //         } else {
    //             context.state.errorMsg = resp.data.msg
    //         }
    //     })
    // },
    //
    // listRecord(context) {
    //     dataService.listRecord(
    //         {}, resp => {
    //             console.log(resp)
    //             if (resp.data.code === 0) {
    //                 context.commit("updateRowData", resp.data.data)
    //             } else {
    //                 context.state.errorMsg = resp.data.msg
    //             }
    //         }
    //     )
    // },
    //
    // addRecord(context) {
    //     dataService.addRecord(context.state.newRecord, resp => {
    //         console.log("add record", resp)
    //         if (resp.data.code === 0) {
    //             context.dispatch("listRecord")
    //             // context.commit("addRecord", context.state.newRecord)
    //         } else {
    //             context.state.errorMsg = resp.data.msg
    //         }
    //     })
    // },
    //
    // deleteRecord(context, id) {
    //     dataService.deleteRecord(id, resp => {
    //         console.log(resp)
    //         if (resp.data.code === 0) {
    //             context.commit("deleteRecord", id)
    //         }
    //     })
    // }


}
const mutations = {

}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}