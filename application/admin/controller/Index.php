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
        // 取消模板布局
        $this->view->engine->layout(false);
        return $this->fetch();
    }

    /**
     * 个人中心
     */
    public function userInfo()
    {
        $adminMod = new \app\admin\model\Admin();
        $adminInfo = $adminMod->getInfo($this->admin_id);
        $this->assign("adminInfo", $adminInfo);
        return $this->render();
    }

    /**
     * 更新密码
     */
    public function updatePwd()
    {
        // 参数
        $param = request()->param();
        // 原密码
        $oldPassword = trim($param['oldPassword']);
        if (!$oldPassword) {
            return message("原密码不能为空", false);
        }
        // 新密码
        $newPassword = trim($param['newPassword']);
        if (!$newPassword) {
            return message("新密码不能为空", false);
        }
        // 确认密码
        $rePassword = trim($param['rePassword']);
        if (!$rePassword) {
            return message("确认密码不能为空", false);
        }
        if ($newPassword != $rePassword) {
            return message("两次输入的密码不一致", false);
        }
        if (get_password($oldPassword . $this->admin_info['username']) != $this->admin_info['password']) {
            return message("原始密码不正确", false);
        }
        // 设置新密码
        $data = [
            'id' => $this->admin_id,
            'password' => get_password($newPassword . $this->admin_info['username']),
        ];
        $adminMod = new \app\admin\model\Admin();
        $result = $adminMod->edit($data);
        if (!$result) {
            return message("修改失败", false);
        }
        return message("修改成功");
    }
}
