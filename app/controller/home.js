'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello world';
  }


  async list() {
    this.ctx.body = {
      msg: 'ok',
      data: [{
        type: 'dir',
        name: '我的笔记',
        create_time: '2020-10-21 08:00',
        checked: false,
        data: 'https://pic-go-test.oss-cn-hangzhou.aliyuncs.com/img/53.jpeg'
      },
      {
        type: 'image',
        name: '风景.jpg',
        create_time: '2020-10-21 08:00',
        checked: false,
        data: 'https://pic-go-test.oss-cn-hangzhou.aliyuncs.com/img/53.jpeg'
      },
      {
        type: 'video',
        name: 'uniapp实战教程.mp4',
        create_time: '2020-10-21 08:00',
        checked: false,
        data: 'https://pic-go-test.oss-cn-hangzhou.aliyuncs.com/img/53.jpeg'
      },
      {
        type: 'text',
        name: '记事本.txt',
        create_time: '2020-10-21 08:00',
        checked: false,
        data: 'https://pic-go-test.oss-cn-hangzhou.aliyuncs.com/img/53.jpeg'
      },
      {
        type: 'none',
        name: '压缩包.rar',
        create_time: '2020-10-21 08:00',
        checked: false,
        data: 'https://pic-go-test.oss-cn-hangzhou.aliyuncs.com/img/53.jpeg'
      },
      ],
    };
  }
}

module.exports = HomeController;
