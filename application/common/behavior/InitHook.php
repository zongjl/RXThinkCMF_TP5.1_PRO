<?php
// +----------------------------------------------------------------------
// | RXThinkCMF框架 [ RXThinkCMF ]
// +----------------------------------------------------------------------
// | 版权所有 2017~2019 南京RXThink工作室
// +----------------------------------------------------------------------
// | 官方网站: http://www.rxthink.cn
// +----------------------------------------------------------------------
// | Author: 牧羊人 <rxthink.cn@gmail.com>
// +----------------------------------------------------------------------

namespace app\common\behavior;

/**
 * 注册钩子
 * @author 牧羊人
 * @date 2019/4/24
 * Class InitHook
 * @package app\common\behavior
 */
class InitHook
{
    /**
     * 执行行为 run方法是Behavior唯一的接口
     * @author 牧羊人
     * @date 2019/4/24
     */
    public function run()
    {
        // 安装系统直接return
        if (defined('SYSTEM_INSTALL')) {
            return;
        }

        // TODO...
    }
}
