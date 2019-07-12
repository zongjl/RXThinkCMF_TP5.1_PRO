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

namespace app\admin\controller;

use app\admin\model\Admin as AdminModel;
use app\admin\service\MenuService;

/**
 * 后台主页-控制器
 * @author 牧羊人
 * @date 2019/4/21
 * Class Index
 * @package app\admin\controller
 */
class Index extends AdminBase
{
    /**
     * 初始化方法
     * @author 牧羊人
     * @date 2019/4/21
     */
    public function initialize()
    {
        parent::initialize();
        $this->model = new AdminModel();
    }

    /**
     * 主页
     * @return mixed
     * @author 牧羊人
     * @date 2019/4/21
     */
    public function index()
    {
        // 取消模板布局
        $this->view->engine->layout(false);

        // 获取菜单
        $menuService = new MenuService();
        $result = $menuService->getNavbarMenu($this->system_auth);
        $this->assign('menuList', $result['data']);
        return $this->fetch();
    }

    /**
     * 欢迎页
     * @return mixed
     * @author 牧羊人
     * @date 2019/4/21
     */
    public function main()
    {
        return $this->fetch();
    }
}
