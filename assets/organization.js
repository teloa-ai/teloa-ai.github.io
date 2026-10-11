'use strict';
const chinese=new URLSearchParams(location.search).get('lang')==='zh-CN';
if(chinese){
  document.documentElement.lang='zh-CN';
  document.title='Teloa · 开源项目与资源';
  const copy={eyebrow:'开源项目与资源',title:'让每个人，都拥有自己的 AI 团队。',intro:'Teloa 是用于组建、管理和运行 AI 员工团队的 AI-Native Team Studio。通过以下入口了解产品、开源项目与资源。',website:'Teloa 官网',websiteText:'了解产品，开始组建自己的 AI 团队。',docs:'产品文档',docsText:'安装、配置与日常使用指南。',market:'资源市场',marketText:'探索适用于 AI 员工与团队的资源。',github:'Teloa GitHub',githubText:'源代码、版本发布、讨论与贡献。',securityText:'AI 安全研究、开放基线、参考架构与项目演示。',baseline:'智能体安全基线',baselineText:'独立的安全基线与可自行部署的评估工具。',note:'本组织站点作为 Teloa 项目与公共资源的统一入口。安全门户独立部署于 security.teloa.ai，各开源项目可独立部署与使用。',report:'报告安全问题'};
  for(const node of document.querySelectorAll('[data-copy]'))node.textContent=copy[node.dataset.copy];
  const urls={website:'https://www.teloa.ai/',docs:'https://docs.teloa.ai/',market:'https://market.teloa.ai/',security:'https://security.teloa.ai/?lang=zh-CN',report:'https://security.teloa.ai/report/?lang=zh-CN'};
  for(const node of document.querySelectorAll('[data-site]'))node.href=urls[node.dataset.site];
  const language=document.getElementById('language');language.href='?lang=en';language.lang='en';language.textContent='English';
}
