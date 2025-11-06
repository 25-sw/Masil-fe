import aiIcon from "@/assets/AIImg.svg";
import aiIconActive from "@/assets/AIImg-pr.svg";
import downloadIcon from "@/assets/download.svg";
import downloadIconActive from "@/assets/download-pr.svg";
import sizeIcon from "@/assets/size.svg";
import sizeIconActive from "@/assets/size-pr.svg";
import * as S from "@/pages/createPoster/style";
import type { MenuKey } from "@/types/types";

type Props = {
  activeMenu: MenuKey;
  onMenuClick: (key: MenuKey) => void;
};

export function Sidebar({ activeMenu, onMenuClick }: Props) {
  const items = [
    {
      key: "ai" as const,
      label: "AI 포스터 생성",
      icon: aiIcon,
      activeIcon: aiIconActive,
    },
    {
      key: "download" as const,
      label: "다운로드",
      icon: downloadIcon,
      activeIcon: downloadIconActive,
    },
    {
      key: "size" as const,
      label: "규격",
      icon: sizeIcon,
      activeIcon: sizeIconActive,
    },
  ];

  return (
    <S.Sidebar>
      {items.map((item) => {
        const isActive = activeMenu === item.key;
        return (
          <S.MenuItem
            key={item.key}
            active={isActive}
            onClick={() => onMenuClick(item.key)}
          >
            <S.MenuIcon>
              <img
                src={isActive ? item.activeIcon : item.icon}
                alt={item.label}
                style={{ width: "100%", height: "100%" }}
              />
            </S.MenuIcon>
            <S.MenuText>{item.label}</S.MenuText>
          </S.MenuItem>
        );
      })}
    </S.Sidebar>
  );
}
