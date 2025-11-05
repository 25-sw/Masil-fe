import { useState, useMemo } from 'react';
import * as S from './style';
import AnnouncementCard from '@/components/announcementCard';
import { mockAnnouncements } from '@/data/announcements';

export default function Announcement() {
  const ITEMS_PER_PAGE = 20;

  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedExp, setSelectedExp] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const organizations = Array.from(new Set(mockAnnouncements.map(a => a.organization)));
  const regions = Array.from(new Set(mockAnnouncements.map(a => a.region)));
  const experiences = Array.from(new Set(mockAnnouncements.map(a => a.experience)));
  const industries = Array.from(new Set(mockAnnouncements.map(a => a.industry)));

  const filteredData = useMemo(() => {
    return mockAnnouncements.filter(item => {
      if (selectedOrg && item.organization !== selectedOrg) return false;
      if (selectedRegion && item.region !== selectedRegion) return false;
      if (selectedExp && item.experience !== selectedExp) return false;
      if (selectedIndustry && item.industry !== selectedIndustry) return false;
      return true;
    });
  }, [selectedOrg, selectedRegion, selectedExp, selectedIndustry]);

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
    type: 'org' | 'region' | 'exp' | 'industry',
    value: string | null
  ) => {
    setCurrentPage(1);
    setOpenDropdown(null);
    switch (type) {
      case 'org':
        setSelectedOrg(value);
        break;
      case 'region':
        setSelectedRegion(value);
        break;
      case 'exp':
        setSelectedExp(value);
        break;
      case 'industry':
        setSelectedIndustry(value);
        break;
    }
  };

  const toggleDropdown = (type: string) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const filters = [
    { type: 'org' as const, label: '소관기관', selected: selectedOrg, options: organizations },
    { type: 'region' as const, label: '지역', selected: selectedRegion, options: regions },
    { type: 'exp' as const, label: '업력', selected: selectedExp, options: experiences },
    { type: 'industry' as const, label: '업종', selected: selectedIndustry, options: industries },
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

      <S.CardGrid>
        {currentData.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            period={announcement.period}
            categories={announcement.categories}
          />
        ))}
      </S.CardGrid>

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
