import React, { useState } from 'react';
import { 
  Store, ClipboardList, Star, UserCircle, Users, 
  ChevronRight, ChevronLeft, FileSpreadsheet, Plus, MapPin, 
  CheckCircle2, ShieldCheck, Map, Loader2,
  HeartHandshake, LogOut, ScanLine, ArrowRightLeft, Heart,
  UploadCloud, FileText, X
} from 'lucide-react';

// --- 1. 登录门户组件 ---
const LoginPortal = ({ setCurrentView, subAccounts, setCurrentUser }) => {
  const [loginRole, setLoginRole] = useState('brand');
  const [phone, setPhone] = useState('13900002222');

  const handleLogin = () => {
    if (loginRole === 'brand') {
      setCurrentView('HQ_DASHBOARD');
    } else {
      const account = subAccounts.find(a => a.phone === phone);
      if (account) {
        setCurrentUser(account);
        if (account.status === 'pending') {
          setCurrentView('STORE_ACTIVATION');
        } else {
          setCurrentView('STORE_DASHBOARD');
        }
      } else {
        alert("未找到该账号，请尝试输入正确的测试手机号");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col relative overflow-hidden font-sans">
      <div className="bg-gradient-to-br from-red-500 via-rose-400 to-pink-300 rounded-b-[3rem] shadow-inner pt-24 pb-8 px-8 text-center text-white">
        <div className="w-20 h-20 bg-white rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-xl shadow-red-500/30">
          <HeartHandshake className="text-[#E63F59]" size={40} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2 drop-shadow-md">数字关爱平台</h1>
        <p className="text-white/80 text-sm">让爱落到实处，让公益更透明</p>
      </div>

      <div className="bg-white mx-6 rounded-3xl shadow-xl p-6 relative z-10 flex-1 mb-10 border border-gray-100">
        <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8">
          <button 
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${loginRole === 'brand' ? 'bg-white text-gray-800 shadow border border-gray-100' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setLoginRole('brand')}
          >
            品牌总店端
          </button>
          <button 
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${loginRole === 'store' ? 'bg-[#E63F59] text-white shadow-md shadow-red-200' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setLoginRole('store')}
          >
            核销门店端
          </button>
        </div>

        <div className="space-y-6">
          {loginRole === 'brand' ? (
            <div className="text-center py-4">
              <div className="text-sm text-gray-500 mb-6">您将以「品牌总店管理员」身份登录，<br/>进行全局数据监控与门店权限下发。</div>
              <button onClick={handleLogin} className="w-full bg-[#E63F59] text-white rounded-2xl p-4 font-bold text-lg shadow-lg shadow-red-200 hover:bg-red-600 transition active:scale-95">
                一键登录管理后台
              </button>
            </div>
          ) : (
            <div className="py-2">
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-gray-700 ml-1">门店核销员手机号</label>
                <input 
                  type="tel" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-800 focus:ring-2 focus:ring-red-100 focus:border-[#E63F59] outline-none transition font-mono text-lg"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
                <div className="flex justify-between text-xs text-gray-400 px-1 mt-2">
                  <span onClick={() => setPhone('13800001111')} className="cursor-pointer hover:text-[#E63F59]">1380...(已激活)</span>
                  <span onClick={() => setPhone('13900002222')} className="cursor-pointer hover:text-[#E63F59]">1390...(待激活)</span>
                </div>
              </div>
              <button onClick={handleLogin} className="w-full bg-[#E63F59] text-white rounded-2xl p-4 font-bold text-lg shadow-lg shadow-red-200 hover:bg-red-600 transition active:scale-95">
                登录门店工作台
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- 2. 品牌总店看板组件 ---
const HQDashboard = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-10">
      <div className="relative bg-gradient-to-br from-red-500 via-rose-400 to-pink-300 pt-12 pb-24 px-4 overflow-hidden rounded-b-[40px]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="flex justify-between items-center text-white relative z-10 mb-6">
          <div className="flex items-center space-x-2">
            <HeartHandshake size={24} className="text-white" />
            <span className="text-lg font-bold tracking-wide">品牌总店看板</span>
          </div>
          <button onClick={() => setCurrentView('LOGIN')} className="text-white/80 hover:text-white flex items-center text-sm bg-black/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <LogOut size={14} className="mr-1" /> 退出
          </button>
        </div>
      </div>

      <div className="px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4 flex justify-between items-center border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
              <Store className="text-red-500" size={24} />
            </div>
            <div>
              <div className="font-bold text-gray-800 text-lg">品牌总店测试账号</div>
              <div className="text-xs text-gray-400">超级管理员</div>
            </div>
          </div>
          <button className="bg-red-50 text-red-500 px-4 py-1.5 rounded-full text-xs font-bold border border-red-100">
            详细报表
          </button>
        </div>

        {/* 核心数据展示 */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-3 flex flex-col justify-center">
            <div className="text-gray-500 text-[11px] mb-1 font-medium">关联活动数</div>
            <div className="font-extrabold text-gray-800 text-2xl">12</div>
          </div>
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-3 flex flex-col justify-center">
            <div className="text-gray-500 text-[11px] mb-1 font-medium">累计核销次数</div>
            <div className="font-extrabold text-gray-800 text-2xl">856</div>
          </div>
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-3 flex flex-col justify-center">
            <div className="text-gray-500 text-[11px] mb-1 font-medium">累计核销卡数</div>
            <div className="font-extrabold text-gray-800 text-2xl">342</div>
          </div>
          <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-3">
            <div className="text-gray-500 text-xs mb-1 flex items-center font-medium"><span className="text-gray-400 mr-0.5">￥</span>累计核销金额</div>
            <div className="font-bold text-gray-800 text-lg">12,500.00</div>
          </div>
          <div className="bg-teal-50/60 border border-teal-100 rounded-xl p-3">
            <div className="text-gray-500 text-xs mb-1 flex items-center font-medium"><span className="text-gray-400 mr-0.5">￥</span>实际核销金额</div>
            <div className="font-bold text-gray-800 text-lg">12,450.00</div>
          </div>
          <div className="bg-red-50/60 border border-red-100 rounded-xl p-3">
            <div className="text-gray-500 text-xs mb-1 flex items-center font-medium"><span className="text-gray-400 mr-0.5">￥</span>退款金额</div>
            <div className="font-bold text-gray-800 text-lg">50.00</div>
          </div>
        </div>

        {/* 功能入口区 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 pb-8">
          <div className="font-bold text-gray-800 mb-4 border-b border-gray-50 pb-2">基础配置与管理</div>
          <div className="grid grid-cols-4 gap-y-6 gap-x-2">
            
            <div className="flex flex-col items-center cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-2"><Store className="text-blue-500" size={24} /></div>
              <span className="text-xs text-gray-700">商家管理</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-2"><ClipboardList className="text-blue-400" size={24} /></div>
              <span className="text-xs text-gray-700">核销记录</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mb-2"><Star className="text-pink-400" size={24} /></div>
              <span className="text-xs text-gray-700">活动中心</span>
            </div>
            
            {/* 核心动作：配置核销门店账号 */}
            <div className="flex flex-col items-center cursor-pointer relative group" onClick={() => setCurrentView('HQ_SUB_ACCOUNTS')}>
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-2 ring-2 ring-[#E63F59] ring-offset-2 transition-all shadow-md shadow-red-100">
                <Users className="text-[#E63F59]" size={24} />
              </div>
              <div className="absolute -top-1 right-1 bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full border border-white z-10 animate-bounce">配置</div>
              <span className="text-xs font-bold text-[#E63F59]">核销门店配置</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. 品牌总店：配置核销门店账号组件 ---
const HQSubAccounts = ({ setCurrentView, subAccounts, setSubAccounts }) => {
  const [showImportModal, setShowImportModal] = useState(false);
  const [importStatus, setImportStatus] = useState('idle');
  const [mockImportData, setMockImportData] = useState([]);
  
  const handleSimulateUpload = () => {
    setImportStatus('uploading');
    setTimeout(() => {
      setMockImportData([
        { storeName: '龙华壹方城爱心发放点', address: '龙华区龙华大道3639号', staffName: '王五', phone: '13700003333' },
        { storeName: '福田星河COCO Park', address: '福田区福华三路268号', staffName: '赵六', phone: '13600004444' },
        { storeName: '罗湖万象城志愿者驿站', address: '罗湖区宝安南路1881号', staffName: '钱七', phone: '13500005555' }
      ]);
      setImportStatus('preview');
    }, 1500);
  };

  const handleConfirmImport = () => {
    const newAccounts = mockImportData.map((item, index) => ({
      ...item,
      id: Date.now() + index,
      status: 'pending',
      verifyCount: 0
    }));
    setSubAccounts([...newAccounts, ...subAccounts]);
    setImportStatus('success');
    
    setTimeout(() => {
      setShowImportModal(false);
      setImportStatus('idle');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col font-sans relative">
      <div className="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm border-b border-gray-100">
        <button onClick={() => setCurrentView('HQ_DASHBOARD')} className="p-1 -ml-2 text-gray-600 active:bg-gray-100 rounded-lg"><ChevronLeft size={28} /></button>
        <h1 className="text-lg font-bold text-gray-800">门店子账号管理</h1>
        <div className="w-8"></div>
      </div>

      <div className="p-4 flex-1">
        <div className="flex space-x-3 mb-6">
          <button 
            onClick={() => setCurrentView('HQ_ADD_SUB')}
            className="flex-1 flex items-center justify-center py-3.5 rounded-2xl border-2 border-[#E63F59] text-[#E63F59] bg-white font-bold shadow-sm active:bg-red-50 transition-colors"
          >
            <Plus size={20} className="mr-1" /> 单条录入
          </button>
          <button 
            onClick={() => {
              setShowImportModal(true);
              setImportStatus('idle');
            }}
            className="flex-1 flex items-center justify-center py-3.5 rounded-2xl bg-[#E63F59] text-white font-bold shadow-md shadow-red-200 active:bg-red-600 transition-colors"
          >
            <FileSpreadsheet size={20} className="mr-1" /> Excel批量导入
          </button>
        </div>

        <h2 className="text-sm font-bold text-gray-500 mb-3 px-1">账号状态监控</h2>
        <div className="space-y-4">
          {subAccounts.map(acc => (
            <div key={acc.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-1.5 h-full ${acc.status === 'active' ? 'bg-emerald-500' : 'bg-orange-400'}`}></div>
              
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-base text-gray-800 pl-3 leading-tight pr-2">{acc.storeName}</h3>
                {acc.status === 'active' ? (
                  <span className="flex-shrink-0 bg-emerald-50 text-emerald-600 text-[11px] px-2 py-1 rounded-md border border-emerald-100 font-bold">已激活授权</span>
                ) : (
                  <span className="flex-shrink-0 bg-orange-50 text-orange-600 text-[11px] px-2 py-1 rounded-md border border-orange-100 font-bold animate-pulse">待员工激活</span>
                )}
              </div>
              
              <div className="pl-3 space-y-1.5 mb-4 text-[13px] text-gray-600">
                <div className="flex items-start"><span className="text-gray-400 w-16">配置地址:</span><span className="flex-1 leading-snug">{acc.address}</span></div>
                <div className="flex items-center"><span className="text-gray-400 w-16">负责人:</span><span>{acc.staffName}</span></div>
                <div className="flex items-center"><span className="text-gray-400 w-16">登录账号:</span><span className="font-mono font-medium">{acc.phone}</span></div>
              </div>

              <div className="pt-3 border-t border-gray-50 flex justify-between items-center pl-3">
                <div className="text-xs text-gray-400">核销业绩: <strong className="text-gray-700 text-sm">{acc.verifyCount}</strong> 笔</div>
                <button className="text-[#E63F59] text-sm flex items-center font-medium bg-red-50 px-3 py-1.5 rounded-lg active:bg-red-100">
                   管理配置 <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showImportModal && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/60 animate-in fade-in duration-200">
          <div className="bg-white w-full rounded-t-[2rem] p-6 pb-8 shadow-2xl animate-in slide-in-from-bottom-10 max-h-[85vh] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-extrabold text-gray-800">批量导入核销账号</h3>
              <button onClick={() => setShowImportModal(false)} className="p-2 bg-gray-100 text-gray-500 rounded-full active:bg-gray-200">
                <X size={20} />
              </button>
            </div>

            {importStatus === 'idle' && (
              <div className="flex-1">
                <div className="bg-orange-50 text-orange-700 p-4 rounded-xl text-xs mb-6 border border-orange-100 leading-relaxed">
                  <strong>导入须知：</strong><br/>
                  请按照系统提供的标准 Excel 模板填写数据。包含：门店名称、地址、负责人、手机号。单次最多支持导入 500 条。
                </div>
                
                <div 
                  onClick={handleSimulateUpload}
                  className="border-2 border-dashed border-[#E63F59] bg-red-50 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-red-100 transition group"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-105 transition">
                    <UploadCloud size={32} className="text-[#E63F59]" />
                  </div>
                  <span className="font-bold text-[#E63F59] text-lg mb-1">点击选择 Excel 文件</span>
                  <span className="text-xs text-gray-400">支持 .xlsx 或 .xls 格式</span>
                </div>
              </div>
            )}

            {importStatus === 'uploading' && (
              <div className="flex-1 flex flex-col items-center justify-center py-16">
                <Loader2 size={48} className="text-[#E63F59] animate-spin mb-4" />
                <span className="text-gray-600 font-bold">正在上传并解析表格数据...</span>
              </div>
            )}

            {importStatus === 'preview' && (
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex items-center justify-between bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-100 mb-4">
                  <span className="text-emerald-700 font-bold text-sm">解析成功！</span>
                  <span className="text-emerald-600 text-xs">共读取到 <strong>{mockImportData.length}</strong> 条有效数据</span>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-2 space-y-3 mb-6">
                  {mockImportData.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-100 p-3 rounded-xl flex gap-3">
                      <div className="mt-1"><FileText size={18} className="text-gray-400" /></div>
                      <div className="flex-1">
                        <div className="font-bold text-sm text-gray-800">{item.storeName}</div>
                        <div className="text-xs text-gray-500 mt-1">{item.address}</div>
                        <div className="text-xs text-gray-500 mt-1">{item.staffName} · <span className="font-mono">{item.phone}</span></div>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={handleConfirmImport}
                  className="w-full bg-[#E63F59] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-red-200 active:scale-95 transition"
                >
                  确认导入并下发权限
                </button>
              </div>
            )}

            {importStatus === 'success' && (
              <div className="flex-1 flex flex-col items-center justify-center py-12 animate-in zoom-in-95">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">批量导入成功</h3>
                <p className="text-gray-500 text-sm">已成功新增 {mockImportData.length} 个门店子账号</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// --- 4. 品牌总店：单条录入组件 ---
const HQAddSubAccount = ({ setCurrentView, subAccounts, setSubAccounts }) => {
  const [newAccount, setNewAccount] = useState({ storeName: '', address: '', staffName: '', phone: '' });
  
  const handleSave = () => {
    if(!newAccount.storeName || !newAccount.phone) return alert("请填写门店名称和手机号");
    setSubAccounts([{ ...newAccount, id: Date.now(), status: 'pending', verifyCount: 0 }, ...subAccounts]);
    setNewAccount({ storeName: '', address: '', staffName: '', phone: '' });
    setCurrentView('HQ_SUB_ACCOUNTS');
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] font-sans flex flex-col">
      <div className="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm border-b border-gray-100">
        <button onClick={() => setCurrentView('HQ_SUB_ACCOUNTS')} className="p-1 -ml-2 text-gray-600 active:bg-gray-100 rounded-lg"><ChevronLeft size={28} /></button>
        <h1 className="text-lg font-bold text-gray-800">录入核销门店 (单条)</h1>
        <div className="w-8"></div>
      </div>
      <div className="p-5 flex-1">
        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-5 border border-gray-100">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">门店/活动点名称 *</label>
            <input type="text" placeholder="如：南山科技园领取点" value={newAccount.storeName} onChange={e => setNewAccount({...newAccount, storeName: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-red-100 focus:border-[#E63F59] outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">详细地址 *</label>
            <input type="text" placeholder="用于门店位置打点确认" value={newAccount.address} onChange={e => setNewAccount({...newAccount, address: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-red-100 focus:border-[#E63F59] outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">核销员姓名</label>
            <input type="text" placeholder="如：李师傅" value={newAccount.staffName} onChange={e => setNewAccount({...newAccount, staffName: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-red-100 focus:border-[#E63F59] outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">登录手机号 *</label>
            <input type="tel" placeholder="该手机号将作为门店端登录凭证" value={newAccount.phone} onChange={e => setNewAccount({...newAccount, phone: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-red-100 focus:border-[#E63F59] outline-none font-mono" />
          </div>
        </div>
        <button onClick={handleSave} className="w-full bg-[#E63F59] text-white rounded-2xl p-4 mt-8 font-bold text-lg shadow-lg shadow-red-200 active:scale-95 transition">
          保存并下发权限
        </button>
      </div>
    </div>
  );
};

// --- 5. 核销门店：确认门店地址信息组件 ---
const StoreActivation = ({ setCurrentView, currentUser, setCurrentUser, setSubAccounts }) => {
  const [checking, setChecking] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleMapConfirm = () => {
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      setVerified(true);
    }, 1200);
  };

  const handleEnter = () => {
    if(!verified) return;
    setSubAccounts(prev => prev.map(acc => acc.id === currentUser.id ? { ...acc, status: 'active' } : acc));
    setCurrentUser(prev => ({...prev, status: 'active'}));
    setCurrentView('STORE_DASHBOARD');
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] font-sans flex flex-col">
      <div className="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <button onClick={() => setCurrentView('LOGIN')} className="p-1 -ml-2 text-gray-600"><ChevronLeft size={28} /></button>
        <h1 className="text-lg font-bold text-gray-800">首次激活核验</h1>
        <div className="w-8"></div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-5 mt-2 border border-gray-100">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="text-[#E63F59]" size={32} />
          </div>
          <h2 className="text-xl font-extrabold text-center text-gray-800 mb-6 tracking-wide">请核对门店信息</h2>
          
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-50 pb-3">
              <span className="text-gray-400">核销员姓名</span>
              <span className="font-bold text-gray-800">{currentUser?.staffName}</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-3">
              <span className="text-gray-400">预设门店名称</span>
              <span className="font-bold text-gray-800 text-right">{currentUser?.storeName}</span>
            </div>
            <div className="flex flex-col gap-1 border-b border-gray-50 pb-3">
              <span className="text-gray-400">总部配置地址</span>
              <span className="font-bold text-gray-800 text-right leading-relaxed">{currentUser?.address}</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100 mb-8">
           <div className="flex items-center gap-2 mb-2">
             <MapPin className="text-blue-500" size={20} />
             <span className="font-bold text-blue-800 text-lg">门店位置确认</span>
           </div>
           <p className="text-blue-700/80 text-xs mb-4 leading-relaxed">
             请在下方地图中确认您的门店实际位置（支持拖拽定位），以确保后续核销业务的安全与准确。
           </p>
           
           <div className="relative w-full h-40 bg-[#E8EAEF] rounded-xl overflow-hidden mb-5 border border-gray-200 shadow-inner group cursor-pointer">
              <div className="absolute top-1/2 left-0 w-full h-4 bg-white -translate-y-1/2 flex items-center justify-center space-x-8 opacity-70">
                 <div className="w-12 h-0.5 bg-gray-300"></div><div className="w-12 h-0.5 bg-gray-300"></div><div className="w-12 h-0.5 bg-gray-300"></div>
              </div>
              <div className="absolute top-0 left-1/3 w-4 h-full bg-white -translate-x-1/2 flex flex-col items-center justify-center space-y-8 opacity-70">
                 <div className="h-12 w-0.5 bg-gray-300"></div><div className="h-12 w-0.5 bg-gray-300"></div>
              </div>
              <div className="absolute top-2 right-2 w-20 h-14 bg-[#D1E8D5] rounded-lg opacity-60"></div>
              <div className="absolute bottom-3 left-4 w-16 h-12 bg-[#E1D4C1] rounded opacity-50"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 transition-transform group-hover:-translate-y-2">
                <div className="bg-[#E63F59] text-white p-2 rounded-full shadow-lg">
                  <MapPin size={22} fill="currentColor" className="text-white" />
                </div>
                <div className="w-2 h-2 bg-red-600 rounded-full mt-1 blur-[1px] shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
              </div>

              {!verified && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-3 py-1.5 rounded-full shadow-md z-20 whitespace-nowrap opacity-80">
                  可拖动地图微调位置
                </div>
              )}
           </div>

           {verified ? (
            <div className="bg-emerald-50 py-3.5 px-4 rounded-xl text-emerald-600 text-sm font-bold flex items-center justify-center gap-2 border border-emerald-100">
              <CheckCircle2 size={20} /> 门店位置已确认保存
            </div>
          ) : (
            <button 
              onClick={handleMapConfirm}
              disabled={checking}
              className="w-full bg-white border-2 border-blue-200 text-blue-600 rounded-xl px-6 py-3.5 text-sm font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2 shadow-sm"
            >
              {checking ? <Loader2 className="animate-spin" size={20} /> : <Map size={20} />}
              {checking ? '正在保存位置信息...' : '确认该点为当前门店位置'}
            </button>
          )}
        </div>

        <div className="mt-auto pb-6">
          <button 
            onClick={handleEnter}
            className={`w-full rounded-2xl p-4 font-bold text-lg transition-all ${
              verified ? 'bg-[#E63F59] text-white shadow-lg shadow-red-200 active:scale-95' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            完成激活，进入工作台
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 6. 核销门店：个人工作台组件 ---
const StoreDashboard = ({ setCurrentView, currentUser, setCurrentUser, setSubAccounts }) => {
  const [showScanModal, setShowScanModal] = useState(false);
  const [verifyCode, setVerifyCode] = useState('');
  const [verifySuccess, setVerifySuccess] = useState(false);

  const handleVerify = () => {
    if(!verifyCode) return alert("请输入核销码或模拟扫描");
    setVerifySuccess(true);
    setTimeout(() => {
      setVerifySuccess(false);
      setShowScanModal(false);
      setVerifyCode('');
      setCurrentUser(prev => ({...prev, verifyCount: prev.verifyCount + 1}));
      setSubAccounts(prev => prev.map(a => a.id === currentUser.id ? {...a, verifyCount: a.verifyCount + 1} : a));
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] relative pb-32 font-sans">
      <div className="bg-gradient-to-br from-[#E63F59] to-[#FF6B8B] pt-14 pb-20 px-5 rounded-b-[2.5rem] shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm"><UserCircle size={24} /></div>
            <div>
              <h1 className="text-lg font-bold tracking-wider leading-tight">数字关爱平台</h1>
              <span className="text-xs text-white/80 font-medium">核销员工作台</span>
            </div>
          </div>
          <button onClick={() => setCurrentView('LOGIN')} className="text-white/80 p-2 bg-black/10 rounded-full backdrop-blur-sm">
            <LogOut size={16} />
          </button>
        </div>
      </div>

      <div className="px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4 border border-gray-100 flex justify-between items-center">
          <div>
            <div className="text-lg text-gray-800 font-extrabold mb-1">你好，{currentUser?.staffName}</div>
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
               <ShieldCheck size={14} className="text-emerald-500" />
               <span>累计完成核销志愿服务 <strong className="text-[#E63F59] text-base">{currentUser?.verifyCount}</strong> 次</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
            <HeartHandshake className="text-[#E63F59]" size={20} />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden border border-gray-100">
          <div className="flex justify-between items-center p-4 border-b border-gray-50">
            <div className="flex items-center gap-2">
              <Store className="text-gray-400" size={18} />
              <div className="font-bold text-gray-800 text-sm truncate pr-2">{currentUser?.storeName}</div>
            </div>
            <button className="flex-shrink-0 bg-gray-100 text-gray-600 text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 font-bold">
              切换 <ArrowRightLeft size={10} />
            </button>
          </div>
          <div className="p-4 bg-red-50/30">
            <div className="text-xs text-gray-400 mb-1">当前执行活动</div>
            <div className="flex items-center gap-2 text-gray-800 text-sm font-bold">
              <Heart className="text-[#E63F59]" size={16} fill="currentColor" />
              关爱困难群体爱心帮帮卡活动
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-8 pt-12 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-20">
        <button 
          onClick={() => setShowScanModal(true)}
          className="w-9/12 bg-[#E63F59] text-white rounded-full py-5 text-xl font-extrabold shadow-xl shadow-red-500/30 flex items-center justify-center gap-3 pointer-events-auto hover:scale-[1.02] active:scale-95 transition-all ring-4 ring-white"
        >
          <ScanLine size={28} /> 扫码核销
        </button>
      </div>

      {showScanModal && (
        <div className="absolute inset-0 bg-black/70 z-50 flex flex-col items-center justify-end sm:justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-sm p-6 relative overflow-hidden animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-0">
             <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 sm:hidden"></div>
             
             <h3 className="text-xl font-extrabold text-gray-800 mb-2 text-center">核销顾客关爱卡</h3>
             <p className="text-xs text-gray-500 mb-6 text-center">支持扫描二维码或手动输入卡号</p>
             
             {verifySuccess ? (
               <div className="bg-emerald-50 text-emerald-600 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 font-bold border border-emerald-100 my-4 animate-in zoom-in-95">
                 <CheckCircle2 size={48} className="text-emerald-500" />
                 <span className="text-lg">核销成功！</span>
               </div>
             ) : (
               <>
                 <div className="bg-gray-900 rounded-2xl h-40 mb-6 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer border-2 border-transparent hover:border-[#E63F59] transition-colors">
                   <ScanLine size={48} className="text-white/50 group-hover:text-[#E63F59] transition-colors mb-2" />
                   <span className="text-white/60 text-sm font-medium">点击模拟调用摄像头扫描</span>
                   <div className="absolute top-0 left-0 w-full h-1 bg-[#E63F59]/80 shadow-[0_0_10px_#E63F59] animate-[scan_2s_ease-in-out_infinite]"></div>
                 </div>

                 <div className="relative flex py-2 items-center mb-6">
                   <div className="flex-grow border-t border-gray-100"></div>
                   <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-medium">或手动输入</span>
                   <div className="flex-grow border-t border-gray-100"></div>
                 </div>

                 <div className="bg-gray-50 border border-gray-200 rounded-2xl p-1.5 flex items-center gap-2 mb-8 focus-within:border-[#E63F59] focus-within:ring-1 focus-within:ring-[#E63F59] transition-all">
                   <input 
                     type="text" 
                     placeholder="请输入数字核销码" 
                     className="flex-1 bg-transparent px-3 py-2 outline-none text-xl font-mono tracking-widest text-gray-800 text-center placeholder:text-gray-300 placeholder:text-sm placeholder:tracking-normal"
                     value={verifyCode}
                     onChange={e => setVerifyCode(e.target.value)}
                   />
                 </div>

                 <div className="flex gap-3">
                   <button onClick={() => setShowScanModal(false)} className="flex-1 bg-gray-100 text-gray-600 rounded-2xl py-4 font-bold active:bg-gray-200">
                     取消
                   </button>
                   <button 
                     onClick={handleVerify}
                     className="flex-[2] bg-[#E63F59] text-white rounded-2xl py-4 font-bold shadow-lg shadow-red-200 active:scale-95 transition-all"
                   >
                     确认核销
                   </button>
                 </div>
               </>
             )}
          </div>
        </div>
      )}
    </div>
  );
};

// --- 主应用组件 ---
const App = () => {
  const [currentView, setCurrentView] = useState('LOGIN');
  const [currentUser, setCurrentUser] = useState(null);

  const [subAccounts, setSubAccounts] = useState([
    { id: 1, storeName: '南山科技园领取点', address: '南山区科技园科苑路15号', staffName: '张三', phone: '13800001111', status: 'active', verifyCount: 128 },
    { id: 2, storeName: '天府五街35爱心帮帮卡活动', address: '高新区天府五街35号附1号', staffName: '李四', phone: '13900002222', status: 'pending', verifyCount: 0 }
  ]);

  // 全局注入的安全 CSS (避免 React 编译模板字符串冲突)
  const globalCss = `
    @keyframes scan { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }
    .hide-scrollbar::-webkit-scrollbar { display: none; }
  `;

  return (
    <div className="w-full max-w-md mx-auto bg-gray-100 min-h-screen shadow-2xl relative sm:rounded-3xl sm:h-[850px] sm:my-8 sm:border-8 border-gray-900 overflow-hidden flex flex-col">
      <style dangerouslySetInnerHTML={{ __html: globalCss }} />
      
      <div className="flex-1 overflow-y-auto hide-scrollbar relative">
        {currentView === 'LOGIN' && <LoginPortal setCurrentView={setCurrentView} subAccounts={subAccounts} setCurrentUser={setCurrentUser} />}
        {currentView === 'HQ_DASHBOARD' && <HQDashboard setCurrentView={setCurrentView} />}
        {currentView === 'HQ_SUB_ACCOUNTS' && <HQSubAccounts setCurrentView={setCurrentView} subAccounts={subAccounts} setSubAccounts={setSubAccounts} />}
        {currentView === 'HQ_ADD_SUB' && <HQAddSubAccount setCurrentView={setCurrentView} subAccounts={subAccounts} setSubAccounts={setSubAccounts} />}
        {currentView === 'STORE_ACTIVATION' && <StoreActivation setCurrentView={setCurrentView} currentUser={currentUser} setCurrentUser={setCurrentUser} setSubAccounts={setSubAccounts} />}
        {currentView === 'STORE_DASHBOARD' && <StoreDashboard setCurrentView={setCurrentView} currentUser={currentUser} setCurrentUser={setCurrentUser} setSubAccounts={setSubAccounts} />}
      </div>
    </div>
  );
};

export default App;
