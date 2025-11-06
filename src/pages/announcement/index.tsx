import { useState, useMemo } from 'react';
import * as S from './style';
import AnnouncementCard from '@/components/announcementCard';
import { Region, RelatedInstitution, IndustryType, SupportTarget } from '@/types/announcement';
import { useAnnouncements } from '@/hooks/useAnnouncements';
import {
  RegionToAPI,
  RelatedInstitutionToAPI,
  IndustryTypeToAPI,
  SupportTargetToAPI,
} from '@/lib/enumMapper';

export default function Announcement() {
  const ITEMS_PER_PAGE = 20;

  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [selectedOrg, setSelectedOrg] = useState<RelatedInstitution | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<SupportTarget | null>(null);

  const organizations = Object.values(RelatedInstitution);
  const regions = Object.values(Region);
  const industries = Object.values(IndustryType);
  const targets = Object.values(SupportTarget);

  const apiParams = useMemo(() => {
    const params: {
      industryList?: string[];
      regionList?: string[];
      relatedInstitutionList?: string[];
      supportTargetList?: string[];
    } = {};

    if (selectedIndustry) {
      params.industryList = [IndustryTypeToAPI[selectedIndustry]];
    }
    if (selectedRegion) {
      params.regionList = [RegionToAPI[selectedRegion]];
    }
    if (selectedOrg) {
      params.relatedInstitutionList = [RelatedInstitutionToAPI[selectedOrg]];
    }
    if (selectedTarget) {
      params.supportTargetList = [SupportTargetToAPI[selectedTarget]];
    }

    return params;
  }, [selectedOrg, selectedRegion, selectedIndustry, selectedTarget]);

  const { data: announcements = [], isLoading, isError } = useAnnouncements(apiParams);

  const filteredData = useMemo(() => {
    return announcements;
  }, [announcements]);

  const TOTAL_PAGES = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(TOTAL_PAGES, startPage + 4);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= TOTAL_PAGES) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFilterChange = (
    type: 'org' | 'region' | 'industry' | 'target',
    value: string | null
  ) => {
    setCurrentPage(1);
    setOpenDropdown(null);
    switch (type) {
      case 'org':
        setSelectedOrg(value as RelatedInstitution | null);
        break;
      case 'region':
        setSelectedRegion(value as Region | null);
        break;
      case 'industry':
        setSelectedIndustry(value as IndustryType | null);
        break;
      case 'target':
        setSelectedTarget(value as SupportTarget | null);
        break;
    }
  };

  const toggleDropdown = (type: string) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const filters = [
    { type: 'org' as const, label: '소관기관', selected: selectedOrg, options: organizations },
    { type: 'region' as const, label: '지역', selected: selectedRegion, options: regions },
    { type: 'industry' as const, label: '업종', selected: selectedIndustry, options: industries },
    { type: 'target' as const, label: '지원대상', selected: selectedTarget, options: targets },
  ];

  return (
    <S.Wrapper>
      <S.Title>공고 찾기</S.Title>

      <S.FilterSection>
        {filters.map((filter) => (
          <S.FilterDropdown key={filter.type}>
            <S.FilterButton onClick={() => toggleDropdown(filter.type)}>
              {filter.selected || filter.label} <img src="/arrows/downArrow.svg" alt={filter.label} />
            </S.FilterButton>
            {openDropdown === filter.type && (
              <S.DropdownMenu>
                <S.DropdownItem onClick={() => handleFilterChange(filter.type, null)}>
                  전체
                </S.DropdownItem>
                {filter.options.map((option) => (
                  <S.DropdownItem
                    key={option}
                    onClick={() => handleFilterChange(filter.type, option)}
                  >
                    {option}
                  </S.DropdownItem>
                ))}
              </S.DropdownMenu>
            )}
          </S.FilterDropdown>
        ))}
      </S.FilterSection>

      <S.Divider />

      {isLoading ? (
        <S.LoadingMessage>로딩 중...</S.LoadingMessage>
      ) : isError ? (
        <S.ErrorMessage>데이터를 불러오는데 실패했습니다.</S.ErrorMessage>
      ) : currentData.length === 0 ? (
        <S.EmptyMessage>검색 결과가 없습니다.</S.EmptyMessage>
      ) : (
        <S.CardGrid>
          {currentData.map((announcement, index) => (
            <AnnouncementCard
              key={announcement.pbancSn || announcement.pbancId || index}
              title={announcement.pbancNm}
              period={announcement.aplyPd}
              categories={announcement.rcrtTypeCdNm.split('/')}
            />
          ))}
        </S.CardGrid>
      )}

      {TOTAL_PAGES > 0 && (
        <S.Pagination>
          <S.PageArrow
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src="/arrows/caret-left.svg" alt="이전 페이지" />
          </S.PageArrow>
          <S.PageNumbers>
            {getPageNumbers().map((page) => (
              <S.PageNumber
                key={page}
                active={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </S.PageNumber>
            ))}
          </S.PageNumbers>
          <S.PageArrow
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === TOTAL_PAGES}
          >
            <img src="/arrows/caret-right.svg" alt="다음 페이지" />
          </S.PageArrow>
        </S.Pagination>
      )}
    </S.Wrapper>
  );
}
