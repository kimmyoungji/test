//ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "server", // 실행 프로세스 이름
      script: "./build/bundle.js", // 실행 파일명
      instances: 1, // 프로세스 수
      exec_mode: "cluster", // 실행 모드
      merge_logs: true, // 로그 병합
      cron_restart: "0 6 * * *", // 재시작 시간 설정
      watch: false,
      instance_var: "INSTANCE_ID",
    },
  ],
};
