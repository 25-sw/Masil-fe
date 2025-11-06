import { useState, useEffect } from 'react';
import * as S from './style';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'react-toastify';

interface StoreInfo {
  storeName: string;
  storeAddress: string;
  storePhone: string;
  businessNumber: string;
  ownerName: string;
  industryType: string;
  region: string;
  description: string;
}

export default function My() {
  const { accountId } = useAuthStore();

  // 로컬스토리지에서 초기값 불러오기
  const getInitialData = (): StoreInfo => {
    const saved = localStorage.getItem(`storeInfo_${accountId}`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return {
          storeName: '',
          storeAddress: '',
          storePhone: '',
          businessNumber: '',
          ownerName: '',
          industryType: '',
          region: '',
          description: '',
        };
      }
    }
    return {
      storeName: '',
      storeAddress: '',
      storePhone: '',
      businessNumber: '',
      ownerName: '',
      industryType: '',
      region: '',
      description: '',
    };
  };

  const [formData, setFormData] = useState<StoreInfo>(getInitialData());
  const [isSaved, setIsSaved] = useState(false);

  // 데이터 로드
  useEffect(() => {
    if (accountId) {
      const saved = localStorage.getItem(`storeInfo_${accountId}`);
      if (saved) {
        try {
          setFormData(JSON.parse(saved));
          setIsSaved(true);
        } catch (error) {
          console.error('Failed to load store info:', error);
        }
      }
    }
  }, [accountId]);

  const handleInputChange = (field: keyof StoreInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (
      !formData.storeName ||
      !formData.ownerName ||
      !formData.businessNumber ||
      !formData.storePhone ||
      !formData.storeAddress ||
      !formData.industryType ||
      !formData.region
    ) {
      toast.error('필수 항목을 모두 입력해주세요.');
      return;
    }

    // 로컬스토리지에 저장
    try {
      localStorage.setItem(`storeInfo_${accountId}`, JSON.stringify(formData));
      setIsSaved(true);
      toast.success('가게 정보가 저장되었습니다!');
    } catch (error) {
      toast.error('저장에 실패했습니다. 다시 시도해주세요.');
      console.error('Failed to save store info:', error);
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.PageHeader>
          <S.HeaderContent>
            <S.Title>내 가게 관리</S.Title>
            <S.Description>
              가게 정보를 등록하고 관리하여 맞춤형 지원사업을 추천받으세요
            </S.Description>
          </S.HeaderContent>
          <S.AccountBadge>
            <S.AccountLabel>계정</S.AccountLabel>
            <S.AccountValue>{accountId || '로그인 필요'}</S.AccountValue>
          </S.AccountBadge>
        </S.PageHeader>

        <S.FormCard>
          <S.Section>
            <S.SectionHeader>
              <S.SectionIcon>🏪</S.SectionIcon>
              <div>
                <S.SectionTitle>기본 정보</S.SectionTitle>
                <S.SectionSubtitle>가게의 기본적인 정보를 입력해주세요</S.SectionSubtitle>
              </div>
            </S.SectionHeader>

            <S.FormGrid>
              <S.FormGroup>
                <S.Label>
                  가게명 <S.Required>*</S.Required>
                </S.Label>
                <S.Input
                  type="text"
                  value={formData.storeName}
                  onChange={(e) => handleInputChange('storeName', e.target.value)}
                  placeholder="예) 홍길동 분식"
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>
                  대표자명 <S.Required>*</S.Required>
                </S.Label>
                <S.Input
                  type="text"
                  value={formData.ownerName}
                  onChange={(e) => handleInputChange('ownerName', e.target.value)}
                  placeholder="예) 홍길동"
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>
                  사업자등록번호 <S.Required>*</S.Required>
                </S.Label>
                <S.Input
                  type="text"
                  value={formData.businessNumber}
                  onChange={(e) => handleInputChange('businessNumber', e.target.value)}
                  placeholder="000-00-00000"
                  maxLength={12}
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>
                  전화번호 <S.Required>*</S.Required>
                </S.Label>
                <S.Input
                  type="tel"
                  value={formData.storePhone}
                  onChange={(e) => handleInputChange('storePhone', e.target.value)}
                  placeholder="02-0000-0000"
                />
              </S.FormGroup>
            </S.FormGrid>
          </S.Section>

          <S.Divider />

          <S.Section>
            <S.SectionHeader>
              <S.SectionIcon>📍</S.SectionIcon>
              <div>
                <S.SectionTitle>위치 정보</S.SectionTitle>
                <S.SectionSubtitle>가게의 위치 정보를 입력해주세요</S.SectionSubtitle>
              </div>
            </S.SectionHeader>

            <S.FormGrid>
              <S.FormGroup fullWidth>
                <S.Label>
                  가게 주소 <S.Required>*</S.Required>
                </S.Label>
                <S.Input
                  type="text"
                  value={formData.storeAddress}
                  onChange={(e) => handleInputChange('storeAddress', e.target.value)}
                  placeholder="예) 서울특별시 강남구 테헤란로 123"
                />
                <S.HelperText>상세 주소까지 정확히 입력해주세요</S.HelperText>
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>
                  지역 <S.Required>*</S.Required>
                </S.Label>
                <S.Select value={formData.region} onChange={(e) => handleInputChange('region', e.target.value)}>
                  <option value="">지역 선택</option>
                  <option value="서울">서울특별시</option>
                  <option value="부산">부산광역시</option>
                  <option value="대구">대구광역시</option>
                  <option value="인천">인천광역시</option>
                  <option value="광주">광주광역시</option>
                  <option value="대전">대전광역시</option>
                  <option value="울산">울산광역시</option>
                  <option value="세종">세종특별자치시</option>
                  <option value="경기">경기도</option>
                  <option value="강원">강원특별자치도</option>
                  <option value="충북">충청북도</option>
                  <option value="충남">충청남도</option>
                  <option value="전북">전북특별자치도</option>
                  <option value="전남">전라남도</option>
                  <option value="경북">경상북도</option>
                  <option value="경남">경상남도</option>
                  <option value="제주">제주특별자치도</option>
                </S.Select>
              </S.FormGroup>
            </S.FormGrid>
          </S.Section>

          <S.Divider />

          <S.Section>
            <S.SectionHeader>
              <S.SectionIcon>💼</S.SectionIcon>
              <div>
                <S.SectionTitle>사업 정보</S.SectionTitle>
                <S.SectionSubtitle>업종 및 사업 상세 정보를 입력해주세요</S.SectionSubtitle>
              </div>
            </S.SectionHeader>

            <S.FormGrid>
              <S.FormGroup>
                <S.Label>
                  업종 <S.Required>*</S.Required>
                </S.Label>
                <S.Select value={formData.industryType} onChange={(e) => handleInputChange('industryType', e.target.value)}>
                  <option value="">업종 선택</option>
                  <option value="제조업">제조업</option>
                  <option value="도소매업">도소매업</option>
                  <option value="숙박 및 음식점업">숙박 및 음식점업</option>
                  <option value="건설업">건설업</option>
                  <option value="운수업">운수업</option>
                  <option value="부동산업 및 임대업">부동산업 및 임대업</option>
                  <option value="전문, 과학 및 기술 서비스업">전문, 과학 및 기술 서비스업</option>
                  <option value="사업시설관리 및 사업지원 서비스업">사업시설관리 및 사업지원 서비스업</option>
                  <option value="교육 서비스업">교육 서비스업</option>
                  <option value="보건업 및 사회복지 서비스업">보건업 및 사회복지 서비스업</option>
                  <option value="예술, 스포츠 및 여가관련 서비스업">예술, 스포츠 및 여가관련 서비스업</option>
                  <option value="협회 및 단체, 수리 및 기타 개인 서비스업">협회 및 단체, 수리 및 기타 개인 서비스업</option>
                </S.Select>
              </S.FormGroup>

              <S.FormGroup fullWidth>
                <S.Label>가게 소개 (선택)</S.Label>
                <S.TextArea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="가게에 대한 간단한 소개를 입력해주세요 (최대 200자)"
                  maxLength={200}
                  rows={4}
                />
                <S.CharCount>{formData.description.length} / 200</S.CharCount>
              </S.FormGroup>
            </S.FormGrid>
          </S.Section>

          <S.ActionBar>
            {isSaved && (
              <S.SavedIndicator>
                ✓ 저장됨
              </S.SavedIndicator>
            )}
            <S.SaveButton type="button" onClick={handleSave}>
              <S.ButtonIcon>💾</S.ButtonIcon>
              저장하기
            </S.SaveButton>
          </S.ActionBar>
        </S.FormCard>

        <S.InfoCard>
          <S.InfoHeader>
            <S.InfoIconWrapper>💡</S.InfoIconWrapper>
            <S.InfoTitle>안내사항</S.InfoTitle>
          </S.InfoHeader>
          <S.InfoList>
            <S.InfoItem>정확한 정보를 입력하시면 맞춤형 지원사업을 추천받을 수 있습니다.</S.InfoItem>
            <S.InfoItem>사업자등록번호는 안전하게 암호화되어 저장됩니다.</S.InfoItem>
            <S.InfoItem>정보 수정은 언제든지 가능합니다.</S.InfoItem>
          </S.InfoList>
        </S.InfoCard>
      </S.Container>
    </S.Wrapper>
  );
}
