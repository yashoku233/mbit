<template>
  <div class="v-application">
    <div class="containers">
      <v-card class="mx-auto my-12"
              max-width="800"
              column>
        <v-card-title>
          <h2 class="MBIT_Title ">迈尔斯-布里格斯类型指标</h2>
        </v-card-title>
        <v-card-text class="card-text">
          <v-row class="beforetest">
            MBTI 测试前须知
          </v-row>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <v-chip-group active-class="deep-purple accent-4 white--text"
                        column>
          </v-chip-group>
          <p>1、参加测试的人员请务必诚实、独立地回答问题，只有如此，才能得到有效的结果。 </p>
          <p>2、《性格分析报告》展示的是你的性格倾向，而不是你的知识、技能、经验。 </p>
          <p>3、MBTI提供的性格类型描述仅供测试者确定自己的性格类型之用，性格类型没有好坏，只有不同。每一种性格特征都有其价值和优点，也有缺点和需要注意的地方。清楚地了解自己的性格优劣势，有利于更好地发挥自己的特长，而尽可能的在为人处事中避免自己性格中的劣势，更好地和他人相处，更好地作重要的决策。 </p>
          <p>只要你是认真、真实地填写了测试问卷，那么通常情况下你都能得到一个确实和你的性格相匹配的类型。希望你能从中或多或少地获得一些有益的信息。</p>
        </v-card-text>
      </v-card>
      <v-card>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  问题描述
                </th>
                <th class="text-left">
                  选项
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data"
                  :key="item.name">
                <td>{{ item.question }}
                  <p>{{ item.answer.A.text }}&#32;{{item.answer.B.text}}</p>
                </td>
                <v-radio-group>
                  <v-radio v-for="(n, key) in item.answer"
                           :key="key"
                           :label="`选项 ${key}`"
                           :value="n.returnvalue"
                           @click="getRadioVal(n.returnvalue,item.index)"></v-radio>
                </v-radio-group>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <hr>
        <v-card class="mt-5 question_order"
                elevation="0"
                max-width="800
                ">
          二、在下列每一对词语中，哪一个词语更合你心意？请仔细想想这些词语的意义，而不要理会他们的字形或读音。
        </v-card>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="12h"
                   md="4">
            </v-col>
          </v-row>
        </v-container>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  问题描述
                </th>
                <th class="text-left">
                  选项
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data1"
                  :key="item.name">
                <td>{{item.indexer}}.{{item.question}}
                  <p>{{ item.answer.A.text }}&#32;&#32;{{item.answer.B.text}}</p>
                </td>
                <v-radio-group>
                  <v-radio v-for="(n, key) in item.answer"
                           :key="key"
                           :label="`选项 ${key}`"
                           :value="n.returnvalue"
                           @click="getRadioVal(n.returnvalue,item.index)"></v-radio>
                </v-radio-group>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <hr>
        <v-card class="mt-5 question_order"
                elevation="0"
                max-width="800">
          三、哪一个答案最能贴切地描绘你一般的感受或行为
        </v-card>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="20h"
                   md="3">
            </v-col>
          </v-row>
        </v-container>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  问题描述
                </th>
                <th class="text-left">
                  选项
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data2"
                  :key="item.name">
                <td>{{ item.question }}
                  <p style="margin:0px;width:100%;word-break:break-all; white-space: pre-line;">{{ item.answer.A.text }}&#32;{{item.answer.B.text}}</p>
                </td>
                <v-radio-group>
                  <v-radio v-for="(n, key) in item.answer"
                           :key="key"
                           :label="`选项 ${key}`"
                           :value="n.returnvalue"
                           @click="getRadioVal(n.returnvalue,item.index)"></v-radio>
                </v-radio-group>
              </tr>
            </tbody>

          </template>
        </v-simple-table>
        <hr>
        <v-card class="mt-5 question_order"
                elevation="0"
                max-width="800
                ">
          二、在下列每一对词语中，哪一个词语更合你心意？请仔细想想这些词语的意义，而不要理会他们的字形或读音。
        </v-card>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="12h"
                   md="4">
            </v-col>
          </v-row>
        </v-container>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  问题描述
                </th>
                <th class="text-left">
                  选项
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data3"
                  :key="item.name">
                <td>{{item.indexer}}.{{item.question}}
                  <p>{{ item.answer.A.text }}&#32;&#32;{{item.answer.B.text}}</p>
                </td>
                <v-radio-group>
                  <v-radio v-for="(n, key) in item.answer"
                           :key="key"
                           :label="`选项 ${key}`"
                           :value="n.returnvalue"
                           @click="getRadioVal(n.returnvalue,item.index)"></v-radio>
                </v-radio-group>
              </tr>
            </tbody>
          </template>
          <hr>
        </v-simple-table>

        <div class="text-center button-start">
          <v-btn rounded
                 color="primary"
                 @click="getVal"
                 class="calculation_btn"
                 dark>
            开始计算
          </v-btn>
        </div>
      </v-card>
      <v-col class="shrink">
        <v-expand-x-transition>
          <v-card v-show="expand2"
                  width="900"
                  class="mx-auto ">
            <router-view></router-view>
          </v-card>
        </v-expand-x-transition>
      </v-col>
      <div class="lt_main">
        <v-card v-if="sortnum2[0]">
        </v-card>
      </div>
      <div class="charts">
        <Pie :id="id"
             :option="option"
             :sortnum2="sortnum2"></Pie>
      </div>
    </div>
  </div>
</template>

<script>

import data from './question.json';
import data1 from './question1.json';
import data2 from './question2.json'
import data3 from './question3.json'
import Pie from './components/Pie'

export default {
  name: 'radio',
  components: {
    Pie
  },

  data () {
    return {
      expand2: false,
      data: data,
      data1: data1,
      data2: data2,
      data3: data3,
      answer: [],
      sortnum: [],
      sortnum1: [],
      sortnum2: [],
      IEsort: [],
      SNsort: [],
      TFsort: [],
      JPsort: [],
      Disabled: false,
      IE: '',
      SN: '',
      TF: '',
      JP: '',
      conform: "",
      chart: null,
      id: 'test',
      option: {
        chart: {
          type: 'pie',//饼图
          options3d: {
            enabled: true,//使用3d功能
            alpha: 60,//延y轴向内的倾斜角度
            beta: 0,
          }
        },
        title: {
          text: ''//图表的标题文字
        },
        subtitle: {
          text: ''//副标题文字
        },

        plotOptions: {
          pie: {
            allowPointSelect: true,//每个扇块能否选中
            cursor: 'pointer',//鼠标指针
            depth: 35,//饼图的厚度
            dataLabels: {
              enabled: true,//是否显示饼图的线形tip
            }
          }
        },
        series: [
          {
            type: 'pie',
            name: '测试用1',//统一的前置词,非必须
            data: [
              ['测试1', 12],//模块名和所占比，也可以{name: '测试1',y: 12}
              ['测试2', 23],
              ['测试3', 19],
              ['测试4', 29]
            ]
          }
        ]
      }
    }

  },
  methods: {
    getRadioVal (Str, num) {
      if (this.answer[num] !== Str) {
        this.answer[num] = Str
      } else {
        this.answer.push(Str)
      }
      // console.log(Str,num);
    },
    getVal () {
      this.expand2 = true
      var str = "";
      var str1 = str.concat(this.answer)
      var array = str1.split("");
      var map = {};
      for (var i = 0; i < array.length; i++) {
        var strWord = array[i];
        if (!map[strWord]) {
          map[strWord] = 1;
        }
        else {
          map[strWord]++;
        }
      }
      for (var word in map) {
        var param = {}
        param.sortnum = word
        param.sortstr = map[word]
        this.sortnum1.push(param)
      }
      function compare (property) {
        return function (a, b) {
          var value1 = a[property];
          var value2 = b[property];
          return value2 - value1;        //倒序   value1-value2  正序
        }
      }
      this.sortnum2 = this.sortnum1.sort(compare('sortstr')).splice(1, 8)

      this.IEsort = this.sortnum2.filter(item => item.sortnum == "E" || item.sortnum == "I")
      this.SNsort = this.sortnum2.filter(item => item.sortnum == "S" || item.sortnum == "N")
      this.TFsort = this.sortnum2.filter(item => item.sortnum == "T" || item.sortnum == "F")
      this.JPsort = this.sortnum2.filter(item => item.sortnum == "J" || item.sortnum == "P")
      for (let i = 0; i < this.SNsort.length; i++) {
        for (let j = 0; j < this.SNsort.length - 1; j++) {
          if (this.SNsort[j] <= this.SNsort[j + 1]) {
            let tmp = this.SNsort[j]
            this.SNsort[j] = this.SNsort[j + 1]
            this.SNsort[j + 1] = tmp
            this.SN = this.SNsort[0].sortnum
          }
        }
      }
      for (let i = 0; i < this.JPsort.length; i++) {
        for (let j = 0; j < this.JPsort.length - 1; j++) {
          if (this.JPsort[j] <= this.JPsort[j + 1]) {
            let tmp = this.JPsort[j]
            this.JPsort[j] = this.JPsort[j + 1]
            this.JPsort[j + 1] = tmp
            this.JP = this.JPsort[0].sortnum
          }
        }
      }
      for (let i = 0; i < this.IEsort.length; i++) {
        for (let j = 0; j < this.IEsort.length - 1; j++) {
          if (this.IEsort[j] <= this.IEsort[j + 1]) {
            let tmp = this.IEsort[j]
            this.IEsort[j] = this.IEsort[j + 1]
            this.IEsort[j + 1] = tmp
            this.IE = this.IEsort[0].sortnum
          }
        }
      }
      for (let i = 0; i < this.TFsort.length; i++) {
        for (let j = 0; j < this.TFsort.length - 1; j++) {
          if (this.TFsort[j] <= this.TFsort[j + 1]) {
            let tmp = this.TFsort[j]
            this.TFsort[j] = this.TFsort[j + 1]
            this.TFsort[j + 1] = tmp
            this.TF = this.TFsort[0].sortnum
          }
        }
      }
      this.conform = this.IE + this.SN + this.TF + this.JP
      this.Disabled = true
      this.$router.push(this.conform)
    }
  }

}

</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.containers {
  width: 800px;
  margin: 0px auto;
  .MBIT_Title {
    text-align: center;
    color: red;
    margin-bottom: 10px;
    width: 800;
  }
  .MBIT_Title2 {
    text-align: center;
    margin-bottom: 40px;
  }
  h2 {
    width: 800px;
  }
  card-text {
    height: 100px;
    line-height: 100px;
  }
  .beforetest {
    padding-left: 11px;
    font-weight: 700;
    font-size: 17px;
  }
  .question_order {
    font-size: 16px;
    padding-left: 14px;
    font-weight: 700;
  }
  hr {
    border: 5px soild #e0e0e0;
  }
  .calculation_btn {
    margin-right: 100px;
    margin-bottom: 10px;
  }
}
</style>